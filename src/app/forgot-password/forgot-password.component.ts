import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgetForm:FormGroup;
  error:any =  null;
  success: boolean = false
  


  constructor(private fb:FormBuilder,
    private _authService: AuthserviceService,
    private route:Router) { }

    get email() {
      return this.forgetForm.get('email');
    }


   


  ngOnInit() {
    this.forgetForm = this.fb.group({
      email: [' ', Validators.required],
  })
}


onForgetSubmit(){
  if(this.forgetForm.valid){
    this._authService.forgotPassword(this.forgetForm.value).subscribe(
      (res) => {
        console.log(res);
        this.success = true;
      },
      (err) => {
        console.log(err)
        this.error = err;
      }
    )

  
  }
}





}

