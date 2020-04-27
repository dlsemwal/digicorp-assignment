import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{LoginService} from '../../modules/shared/services/login.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  image = '../../../assets/image/phone.jpg';
  signData: any = {};
  id: any;
  public loginsubmitted = false
  loginForm:FormGroup;
  public userdata: any;
  public errorShowLogin = false;
  public errorMsg: any
  constructor(private formBuilder:FormBuilder,private router:Router, private loginService:LoginService
  ) {

  }

 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password:['', Validators.required, Validators.minLength[6]]
    })
  }
  get g(){
    return this.loginForm.controls
  }
  loginSubmit(){
  this.loginsubmitted = true
    this.loginService.loggedIn(this.loginForm.value)
    .subscribe(
      (data)=>{
        console.log("login sucssesfully")
        // this._document.defaultView.location.reload();
        this.router.navigate(['home/dashboard'])
     },
     (error)=>{
      this.errorShowLogin = true;
            this.errorMsg = error.error
          }
     )
  }
}



