import { Component } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html',
  // styleUrls: ['./app.component.css']
})
export class JumbotronComponent {

  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;
  
  constructor(){
    this.jbtHeading = "Hello World";
    this.jbtText = "This is a simple text to test the jumbotron functionality ";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about";
  }
}
