import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router }          from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  // loginForm = new FormGroup({
  //   username: new FormControl('', [Validators.required,Validators.minLength(4)]),
  //   password: new FormControl('', [Validators.required,Validators.minLength(4)]),
  // });
  loginForm:any = FormGroup;
  submitted = false;

  constructor( private router:Router, private sessionService:SessionService){}

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      if(this.loginForm.value.username=='admin' && this.loginForm.value.password=='admin'){
        this.sessionService.set('admin',{picture:'/assets/img/user.png'});
          this.router.navigate(["/home"]).then((success)=>{
          // success logic will go here  ..
            console.log('success link',success);
          })
          .catch((error)=>{
          // logic goes here  //
            console.log('fail link',error);
          });
      }
      else
      alert("invalid username or password !");

    }
  }

}
