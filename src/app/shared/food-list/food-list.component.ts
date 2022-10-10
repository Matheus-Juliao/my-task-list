import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/modules/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = []

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: err => err
    })

    this.foodListService.emitEvent.subscribe(
      // res => alert(`Olha você adicionou ${res}`)
      res => this.foodList.push(res)
    )
  }

  public foodListDelete(id: number) {
    this.foodListService.foodListDelete(id).subscribe({
      next: (_res) => this.foodList = this.foodList.filter(item => { return id != item.id }),
      error: (err) => err
    })
  }

  public foodListEdit(nome: string, id: number) {
    this.foodListService.foodListEdit(nome, id).subscribe({
      next: (res) => res,
      error: (err) => err
    })
  }
}
