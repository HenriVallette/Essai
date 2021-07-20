import { Component, OnInit } from '@angular/core';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-memo-view',
  templateUrl: './memo-view.component.html',
  styleUrls: ['./memo-view.component.scss']
})
export class MemoViewComponent implements OnInit {

  memo: any[] = [];

  constructor(private memoService: MemoService) { }

  ngOnInit(): void {
    this.memo = this.memoService.memos;
  }

}
