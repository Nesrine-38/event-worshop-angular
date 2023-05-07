import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  selectedOption:string = "home"
  @Output() selectedOptionOut = new EventEmitter<string>() 
  @Output() toggleSidebar = new EventEmitter<VoidFunction>() 
  @Output() logoutAction = new EventEmitter<VoidFunction>() 
  
  ngOnInit(): void {
  }

  onMenuOptionClick(option:string)
  {
    this.selectedOption = option
    this.selectedOptionOut.emit(option)
  }

  onSidebarToggled()
  {
    this.toggleSidebar.emit();
  }

  onLogoutClicked()
  {
    this.logoutAction.emit()
  }

}
