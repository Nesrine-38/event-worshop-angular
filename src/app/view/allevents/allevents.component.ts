import { Component, Injectable, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config';
import { HttpClientService, HttpMethod } from 'src/app/service/http-client.service';


@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {

  constructor(private httpClient:HttpClientService) { }

  isLoading:boolean = false 

  totalSize = 10
  pageIndex = 0
  dataSource:any = []                 

  ngOnInit(): void {
    this.getAllEvents()
  }

  onChangePage(page:PageEvent)
  {

    this.pageIndex = page.pageIndex
    this.getAllEvents(page.pageIndex,page.pageSize)
    
  }

  getAllEvents(page:number = 0,pageSize:number = 5)
  {

    this.isLoading = true 
    
    this.httpClient.sendRequest(`${Config.getEventstUrl}?page=${page}&pageSize=${pageSize}`,{method:HttpMethod.GET,useToken:true}).subscribe({next:(response)=>{
      this.totalSize = response.body.total
      
      this.dataSource = response.body.events.map((item:any)=>{
        
        var event:any = {}
        event.isMine = localStorage.getItem("id") == item.organizer._id
        event.id = item._id
        event.cover = `${Config.imageFolder}/${item.cover}`
        event.name = item.title
        event.organizer = `${item.organizer.firstname} ${item.organizer.lastname}`
        event.startDate = item.startDate
        event.endDate = item.endDate
        
        return event
      })
      
  
    },error:err=>{

    this.isLoading = false  

  },complete:()=>{

    this.isLoading = false  

  }})

  }
  
}
