const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  casualLeave: {
    type: new mongoose.Schema({
      total: {
        type: Number,
        min: 0,
        max: 10,
        default: 10,
      },
      applied: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
      },
      history: {
        type: [
          new mongoose.Schema({
            _id: String,
            from: Date,
            to: Date,
            days:Number,
            reason: String,
          }),
        ],
        default: [],
      },
    }),
    default: {},
  },
  earnedLeave: {
    type: new mongoose.Schema({
      total: {
        type: Number,
        min: 0,
        max: 4,
        default: 4,
      },
      applied: {
        type: Number,
        min: 0,
        max: 4,
        default: 0,
      },
      history: {
        type: [
          new mongoose.Schema({
            _id: String,
            from: Date,
            to: Date,
            days:Number,
            reason: String,
          }),
        ],
        default: [],
      },
    }),
    default: {},
  },
  otherLeave: {
    type: new mongoose.Schema({
      total: {
        type: Number,
        min: 0,
        max: 10,
        default: 10,
      },
      applied: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
      },
      history: {
        type: [
          new mongoose.Schema({
            _id: String,
            from: Date,
            to: Date,
            days:Number,
            reason: String,
          }),
        ],
        default: [],
      },
    }),
    default: {},
  },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
};

userSchema.methods.addLeave = function (leave) {
  const days = (new Date(leave.to) - new Date(leave.from)) / 86400000 + 1
  this[leave.type].applied += days
  this[leave.type].history.push({
    _id: mongoose.Types.ObjectId().toHexString(),
    to: leave.to,
    from: leave.from,
    days: days,
    reason: leave.reason,
  });
};

const User = mongoose.model("Employee", userSchema);

function validate(user) {
  const schema = {
    name: Joi.string().required().min(5).max(50),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().required().min(5).max(255),
  };
  return Joi.validate(user, schema);
}

function validateLeave(user) {
  const schema = {
    type: Joi.string()
      .valid(["casualLeave", "earnedLeave", "otherLeave"])
      .required(),
    to: Joi.date().required(),
    from: Joi.date().required(),
    reason: Joi.string().required().min(5).max(100),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validate;
exports.validateLeave = validateLeave;
