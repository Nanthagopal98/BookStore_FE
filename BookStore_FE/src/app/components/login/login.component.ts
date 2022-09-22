import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted = false;
  constructor(private formBuilder : FormBuilder, private userService :UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
    console.log("Valid", this.loginForm.value);

    let reqData = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    }
    this.userService.loginUser(reqData).subscribe((response : any) =>{
      console.log(response);
      localStorage.setItem('token', response.data);
    })
    }
  }
}
