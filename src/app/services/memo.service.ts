import { Subject } from "rxjs/internal/Subject";

export class MemoService {

    memoSubject = new Subject<any[]>();

    memos = [
        {
            text: 'Faire une machine',
            statut: 'Done'
        },
        {
            text: 'Changer les draps',
            statut: 'Undone'
        },
        {
            text: 'Faire les courses',
            statut: 'Undone'
        },
        {
            text: 'Changer les piles de la télécommande',
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