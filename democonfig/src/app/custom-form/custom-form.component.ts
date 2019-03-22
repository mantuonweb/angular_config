import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.sass']
})
export class CustomFormComponent implements OnInit {
  control:FormControl
  constructor() { }

  ngOnInit() {
    this.control = new FormControl()
  }

}
