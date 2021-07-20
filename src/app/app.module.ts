import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';
import { MemoViewComponent } from './memo-view/memo-view.component';
import { MemoService } from './services/memo.service';
import { AddMemoComponent } from './add-memo/add-memo.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'menu', component: MemoViewComponent },
  { path: 'addMemo', component: AddMemoComponent },
  { path: '', component: MemoViewComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    MemoViewComponent,
    AddMemoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
