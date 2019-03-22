import { Component, OnInit } from '@angular/core';
import { FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.sass']
})
export class CustomFormComponent implements OnInit {
  control:FormControl;
  jsonresult:{};
  constructor() { }

  ngOnInit() {
    this.control = new FormControl('test',Validators.required);
    this.jsonresult = new FormControl({"test":"test"},Validators.required);
  }

}
