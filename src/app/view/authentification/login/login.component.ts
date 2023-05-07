import { Component, OnInit, DoCheck,OnChanges, SimpleChanges,AfterViewChecked, Input } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Config } from 'src/app/config';
import { HttpClientService, HttpMethod } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent implements OnInit, OnChanges,DoCheck,AfterViewChecked {

  
  hide = true;
  
  constructor(private formBuilder:FormBuilder,private httpClient:HttpClientService, private snackbar:MatSnackBar,private router:Router) { }
  
  formBuilderGroup:any
  isLoading:boolean = false 
  submitted:boolean = false 

  ngOnChanges(changes: SimpleChanges): void {
      
    console.log("ON CHANGES")
  }

  ngDoCheck(): void {
    
    console.log("ON DO CHECK")

  }

  ngAfterViewChecked(): void {
      console.log("dsqdsdqsd")
  }





  ngOnInit(): void {

    this.formBuilderGroup = this.formBuilder.group({

      username:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])

    })

  }

  get f() { return this.formBuilderGroup.controls; }

  
  signIn()
  {

    this.submitted = true 
    

    if (this.formBuilderGroup.invalid) {
      return;
    }

    let data = {email:this.formBuilderGroup.get('username').value,password:this.formBuilderGroup.get('password').value}
    this.isLoading = true 
    
    this.httpClient.sendRequest(Config.signInUsertUrl,{method:HttpMethod.POST,data}).subscribe({next:response => {
      
      localStorage.setItem('token',response.body.token)
      localStorage.setItem('id',response.body.user._id)
      
      this.router.navigate(['/','home'])

    },error:err => {

      this.snackbar.open(err.error.message,"Cancel",{duration:4000})
      this.isLoading = false 

    },complete:() => {

      this.isLoading = false 

    }})
    
  }

}
