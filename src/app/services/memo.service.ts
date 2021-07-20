import { Subject } from "rxjs/internal/Subject";

export class MemoService {

    memoSubject = new Subject<any[]>();

    memos = [
        {
            text: 'Salade',
            statut: 'Done'
        },
        {
            text: 'Saucisses',
            statut: 'Undone'
        },
        {
            text: 'Salade',
            statut: 'Undone'
        },
        {
            text: 'Salade',
            statut: 'Done'
        },
    ];

    addMemo(tache: string, statut: string) {
        const memo = {
            text: '',
            statut: ''
        };
        memo.statut = statut;
        memo.text = tache;
        this.memos.push(memo);

        this.memoSubject.next(this.memos.slice());
    }
}