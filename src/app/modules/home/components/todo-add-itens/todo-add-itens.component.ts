import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add-itens',
  templateUrl: './todo-add-itens.component.html',
  styleUrls: ['./todo-add-itens.component.scss']
})
export class TodoAddItensComponent implements OnInit {
  	@Output() public emitItemTaskList = new EventEmitter()
  	public addItemTaskList: string = ""

  	constructor() { }

	ngOnInit(): void {
	}

	public submitItemTaskList() {
		this.addItemTaskList = this.addItemTaskList.trim()
		if(this.addItemTaskList) {
			this.emitItemTaskList.emit(this.addItemTaskList)
			this.addItemTaskList = ""
		}
	}
}
