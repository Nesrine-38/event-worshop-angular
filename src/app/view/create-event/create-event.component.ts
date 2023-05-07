import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Config } from 'src/app/config';
import { HttpClientService, HttpMethod } from 'src/app/service/http-client.service';

export const validDate: ValidatorFn = (control) =>
{

  if(new Date(control.get('eventStartDate')?.value) > new Date(control.get('eventEndDate')?.value))
  {
    
    
    let error = { 'validDate' : {reason:'end date must be greater than start date'}}
    
    control.get('eventStartDate')?.setErrors(error)
    control.get('eventEndDate')?.setErrors(error)

    return error

  }else{

    return null

  }

}


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClientService,private snackbar:MatSnackBar) { }
  
  formBuilderGroup: any
  submitted:boolean = false 
  isLoading:boolean = false 
 
  
  ngOnInit(): void {
    
  this.formBuilderGroup = this.formBuilder.group({

    eventTitle: new FormControl('',[Validators.required]),
    eventDescription: new FormControl('',[Validators.required]),
    eventAddress: new FormControl('',[Validators.required]),
    eventStartDate: new FormControl('',[Validators.required]),
    eventEndDate: new FormControl('',[Validators.required]),
    eventCover: new FormControl('',[]),
    
    },{
      validators:[validDate]
    })

  }

  onFileChange(event:any) {

    if (event.target.files.length > 0) {

      if(event.target.files)
      {
        const file = event.target.files[0];
        this.formBuilderGroup.get('eventCover').setValue(file)
      }

    }

  }

  get f() { return this.formBuilderGroup.controls; }

  createEvent()
  {
    
    this.submitted = true 
    
    if (this.formBuilderGroup.invalid) {
      return;
    }

    this.isLoading = true
    let formData = new FormData()
    formData.append('title',this.formBuilderGroup.get('eventTitle').value)
    formData.append('description',this.formBuilderGroup.get('eventDescription').value)
    formData.append('startDate',this.formBuilderGroup.get('eventStartDate').value)
    formData.append('eventAddress',this.formBuilderGroup.get('eventAddress').value)
    formData.append('endDate',this.formBuilderGroup.get('eventEndDate').value)
    formData.append('image',this.formBuilderGroup.get('eventCover').value)
   
    this.httpClient.sendRequest(Config.creatEeventUrl,{data : formData, method:HttpMethod.POST, useToken:true}).subscribe({next:response => {

      this.snackbar.open("Event created successfuly","Ok",{duration:4000})

    },error:err=>{

      this.snackbar.open("Error server please try again","Cancel",{duration:4000})
      this.isLoading = false 
    
    },complete:()=>{

      this.isLoading = false 

    }
  })

  }




}
