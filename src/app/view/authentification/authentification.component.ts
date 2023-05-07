import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent implements OnInit {

  constructor() { }

  selectedIndex:number = 0

  ngOnInit(): void {

  }

  accountDidCreated()
  {
    console.log("qdsdsddsds")
this.selectedIndex = 0
  }

}
