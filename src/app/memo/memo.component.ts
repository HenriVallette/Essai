import { Component, Input, OnInit } from '@angular/core';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {

  @Input() todoText: string = '';
  @Input() todoStatut: string = '';
  checked: boolean = false;

  constructor(private memoService: MemoService) {
  }

  ngOnInit(): void {
    if(this.todoStatut === "Done") {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }

  changeValue() {
    if(!this.checked) {
      this.checked = true;
      this.todoStatut = "Done";
    } else {
      this.checked = false;
      this.todoStatut = "Undone";
    }
  }

}
