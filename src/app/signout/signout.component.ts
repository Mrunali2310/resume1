import { Component } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {
  getVal3()
  {
    alert("Are you sure you want logout")
    
  }
   isOn = false;




  toggleButton() {

    this.isOn = !this.isOn;

  }
}
