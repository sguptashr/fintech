import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-super-simple',
  templateUrl: './super-simple.component.html',
  styleUrls: ['./super-simple.component.scss']
})
export class SuperSimpleComponent implements OnInit {

  public checked = true;
  public monthlyValue = 100000;
  public monthlyExpense = 0;
  fControl = new FormControl();
  public tenureList = ['1 Month', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months', '7 Months', '8 Months', '9 Months', '10 Months', '11 Months', '1 Year', '2 Years'];
  constructor() { }

  ngOnInit(): void {
  }

}
