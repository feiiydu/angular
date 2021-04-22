import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  totalLike = 100;
  totalUnlike = 25;
  isLike =false
  isUnlike =false
  constructor() { }

  ngOnInit(): void {
  }

  onClickLike(){
    console.log('Like')
    if (this.isLike){
      this.totalLike--
      this.isLike=false
      return
    }
    this.totalLike++
    this.isLike=true
    if (this.isUnlike) {
      this.totalUnlike--
      this.isUnlike=false
    }
    console.log('like = '+ this.totalLike +this.isLike)
    console.log('unlike = '+ this.totalUnlike +this.isUnlike)
  }
  onClickUnlike(){
    console.log('Unlike')
    if (this.isUnlike){
      this.totalUnlike--
      this.isUnlike=false
      return
    }
    this.totalUnlike++
    this.isUnlike=true
    if (this.isLike) {
      this.totalLike--
      this.isLike=false
    }
    console.log('like = '+ this.totalLike +this.isLike)
    console.log('unlike = '+ this.totalUnlike +this.isUnlike)
  }

}
