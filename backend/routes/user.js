const express = require("express");
const router = express.Router();
const { User, validate, validateLeave } = require("../models/user");
const { auth, idValidator } = require("../middlewares/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password -__v");

  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("This user is already registered");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  user.password = void 0;
  user.__v = void 0;
  res.header("x-auth-token", token).send(_.omit(user, ["password", "__v"]));
});

router.put("/leave/:id", [idValidator, auth], async (req, res) => {
  const id = req.params.id;
  const { error } = validateLeave(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (new Date(req.body.from) > new Date(req.body.to)) {
    res
      .status(422)
      .send("leave start date should be less than to the end date");
  }

  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).send("This user was not found.");
  const leaveType = req.body.type;
  const numberOfLeaves =
    (new Date(req.body.to) - new Date(req.body.from)) / 86400000 + 1;
  const leaveRecord = user[leaveType].history.find((l) => (l.id = id));
  if (
    numberOfLeaves >
    user[leaveType].total - (user[leaveType].applied - leaveRecord.days)
  ) {
    return res
      .status(400)
      .send("The leave should be less than the available leave.");
  }
  user[leaveType].applied =
    user[leaveType].applied - leaveRecord.days + numberOfLeaves;
  leaveRecord.to = req.body.to;
  leaveRecord.from = req.body.from;
  leaveRecord.days = numberOfLeaves;
  leaveRecord.reason = req.body.reason;

  await user.save();
  user.password = void 0;
  user.__v = void 0;
  res.send(_.omit(user, ["password"]));
});

router.put("/leave", auth, async (req, res) => {
  const { error } = validateLeave(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (new Date(req.body.from) > new Date(req.body.to)) {
    res
      .status(422)
      .send("leave start date should be less than to the end date");
  }

  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).send("This user was not found.");
  const numberOfLeaves =
    (new Date(req.body.to) - new Date(req.body.from)) / 86400000 + 1;
  if (
    numberOfLeaves >
    user[req.body.type].total - user[req.body.type].applied
  ) {
    return res
      .status(400)
      .send("The leave should be less than the available leave.");
  }

  user.addLeave(req.body);
  await user.save();

  user.password = void 0;
  user.__v = void 0;
  res.send(_.omit(user, ["password"]));
});

module.exports = router;
