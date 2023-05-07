import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Config } from 'src/app/config';
import { HttpClientService, HttpMethod } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClientService,private snackbar:MatSnackBar,private router:Router) { }

  hide = true;
  formBuilderGroup:any 
  submitted:boolean = false
  isLoading:boolean = false 

  @Output() didSuccessfullyRegistred = new EventEmitter<VoidFunction>() 

  ngOnInit(): void {
  
    this.formBuilderGroup = this.formBuilder.group({

      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])

    })
  }

  get f() { return this.formBuilderGroup.controls; }

  signUp()
  {

    this.submitted = true 

    if (this.formBuilderGroup.invalid) {
      return;
    }

    this.isLoading = true
     
    let data = { email:this.formBuilderGroup.get('email').value,firstname:this.formBuilderGroup.get('firstname').value,lastname:this.formBuilderGroup.get('lastname').value,password:this.formBuilderGroup.get('password').value }
    
    this.httpClient.sendRequest(Config.signUpUsertUrl,{method:HttpMethod.POST,data}).subscribe({next:response=>{
      
      this.snackbar.open(response.body.message,"Login",{duration:4000}).dismissWithAction = ()=>{

        this.didSuccessfullyRegistred.emit()

      }

    },error:err=>{
      
      this.snackbar.open(err.error.message,"Cancel",{duration:4000})
      this.isLoading = false 

    },complete:()=>{

      this.isLoading = false 
      this.submitted = false;
      (document.querySelector("form") as HTMLFormElement).reset()
    
    
    }})
 
  }
 
}
