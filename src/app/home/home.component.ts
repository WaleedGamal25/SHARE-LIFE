import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() {


   }

  ngOnInit() {
  }


  
  users:object[]=[
    {name:"nadia",age:26,img:'assets/images/one.jpg',salary:4000},
    {name:"waleed",age:27,img:'assets/images/one.jpg',salary:2000},
    {name:"ahmed",age:28,img:'assets/images/one.jpg',salary:3000},
    {name:"nadia",age:29,img:'assets/images/one.jpg',salary:4500},            
  ]
  
}









