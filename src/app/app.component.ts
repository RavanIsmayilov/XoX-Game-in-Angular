import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  winningCombinations: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]              
  ];

  winner:string | null = ""

  checkWinner() {
    for (let combination of this.winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.marks[a] !== '' &&
        this.marks[a] === this.marks[b] &&
        this.marks[a] === this.marks[c]
      ) {
        return this.marks[a]; 
      }
    }
    return null;
  }
  
  mark: string = ''
  marks: string[] = []
  moves: any[] = []

  newGame() {
    this.marks = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ]
    this.mark = 'X'
    this.moves = []
  }

  add(index: number) {
    if (this.marks[index] === '') {
      this.marks[index] = this.mark;
      this.moves.push([...this.marks]);
      this.mark = this.mark === 'X' ? 'O' : 'X';

      const winner = this.checkWinner();
      if (winner) {
        this.winner = winner
        this.newGame(); 
      }
    }
  }

  returnMove(index: number) {
    this.marks = this.moves[index]
  }

  constructor(
    private router: Router
  ) {
    this.newGame()
  }

}