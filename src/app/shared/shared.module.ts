import { FormsModule } from '@angular/forms';
import { FoodListComponent } from './food-list/food-list.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FoodAddComponent } from './food-add/food-add.component';



@NgModule({
  declarations: [
    FoodListComponent, 
    FoodAddComponent
  ],
  exports: [
    FoodListComponent,
    FoodAddComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
