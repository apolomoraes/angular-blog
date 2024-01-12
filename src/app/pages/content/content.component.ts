import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://source.unsplash.com/random/?developer";
  contentTitle:string = "lorem ipsum dolor sit amet.";
  contentDescription:string = "lorem ipsum dolor sit amet consectetur adipisicing elit.";

  constructor() { }

  ngOnInit(): void {
  }

}
