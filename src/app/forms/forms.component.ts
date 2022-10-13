import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listFoods: Array<{ food: string}> = [
    {food: "X-Salada"},
    {food: "X-Bacon"},
    {food: "Coxinha"}
  ]

  // constructor() { }

  ngOnInit(): void {
    //ngOnInit
  }

  public onSubmit(form: NgForm) {
    console.log(form.value)
  }

}
