import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

const myNumber = 1;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  showLastName = true;
  myNumber = myNumber;

  users = [
    {
      firstName: "Pavel",
      lastName: "Pelovski"
    },
  
    {
      firstName: "Pesho",
      lastName: "Sashov"
    }
  ];

  selectedUserIndex: null | number = null;

  clickButton(){
  this.showLastName = !this.showLastName;
  }

  get showSelectedIndex(): boolean{
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >=0;
  }

  customEventHandler($event: ICustomEvent){
    console.log($event);
    
  }
}
