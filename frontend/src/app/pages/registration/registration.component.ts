import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
// import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{UserCommonService} from '../../modules/shared/services/user-common.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  image = '../../../assets/image/phone.jpg';
  signData: any = {};
  id: any;
  signupForm: FormGroup;
  submitted = false;
  errorShow = false;
  public confirmPasswordError = false
  public errorMsg: any;
  public signupDoneMsg;
  public signupScree= true;
  constructor(private formBuilder: FormBuilder, private signupService:UserCommonService ) { }


 

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    
    })
  }
  get g() {
    return this.signupForm.controls
  }
  signup() {
    this.submitted = true;

    if (this.signupForm.valid) {
      this.signupService.signupApi(this.signupForm.value).subscribe(
        (data) => {
          this.signupDoneMsg = true;
          this.signupScree = false;
          this.errorShow = false;
        console.log("suc")
        },
        (error) => {
          this.errorShow = true;
          this.errorMsg = error.error
          console.log("error" + error.error.title)
        }
      )
    }
  }
}



