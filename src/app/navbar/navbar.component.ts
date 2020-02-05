import { Component, OnInit } from '@angular/core';
// import { FormControl , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  showModal : boolean;
  showModal2 : boolean;
  
  onClick(event)
  {
    this.showModal = true;

  }
 
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  onClick1(event)
  {
    this.showModal2 = true;

  }
 
  //Bootstrap Modal Close event
  hide1()
  {
    this.showModal2 = false;
  }

  // contactsForm = new FormGroup({
  //    firstName:new FormControl(''),
  //    lastName:new FormControl(''),
  //    email:new FormControl(''),
  //    gender:new FormControl(''),
  //    number:new FormControl('')

  // });

  constructor() { }

  ngOnInit() {
  }

}

