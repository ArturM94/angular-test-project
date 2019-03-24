import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: {};

  constructor() { }

  ngOnInit() {
    this.contacts = {
      email: 'manukian.artur.94@gmail.com',
      skype: 'geroldist',
      telegram: 'manukian94',
      github: 'ArturM94',
    };
  }

}
