import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MemoService } from '../services/memo.service';

@Component({
  selector: 'app-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {

  constructor(private memoService: MemoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const tache = form.value['tache'];
    const statut = "Undone";
    this.memoService.addMemo(tache, statut);
    this.router.navigate(['/menu']);
  }

}
