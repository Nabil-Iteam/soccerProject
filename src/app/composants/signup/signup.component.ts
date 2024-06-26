import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/shared/cPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signUpForm !: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName:["" , [Validators.required , Validators.minLength(3)]],
      lastName:["", [Validators.required , Validators.maxLength(10)]],
      email:["", [Validators.required , Validators.email]],
      password:["", [Validators.required , Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      cPassword:["", [Validators.required , Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]
    },
    {
      validators:mustMatch('password','cPassword')
    }
    )

  }
  signup(){

    //localStorage.setItem("users",JSON.parse(this.signUpForm.value))
    console.log(this.signUpForm);
    
  }

}
