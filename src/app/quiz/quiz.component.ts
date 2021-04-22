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
  likeButton = '';
  dislikeButton = '';
  constructor() { }

  ngOnInit(): void {
    this.likeButton = 'unlikeCSS';
    this.dislikeButton = 'unlikeCSS';
  }

  onClickLike(){
    console.log('Like')
    if (this.isLike){
      this.totalLike--
      this.isLike=false
      this.likeButton = 'unlikeCSS';
      return
    }
    this.totalLike++
    this.isLike=true
    this.likeButton = 'likeCSS';
    if (this.isUnlike) {
      this.totalUnlike--
      this.isUnlike=false
      this.dislikeButton = 'unlikeCSS'
    }
    console.log('like = '+ this.totalLike +this.isLike)
    console.log('unlike = '+ this.totalUnlike +this.isUnlike)
  }
  onClickUnlike(){
    console.log('Unlike')
    if (this.isUnlike){
      this.totalUnlike--
      this.isUnlike=false
      this.dislikeButton = 'unlikeCSS'
      return
    }
    this.totalUnlike++
    this.isUnlike=true
    this.dislikeButton = 'likeCSS'
    if (this.isLike) {
      this.totalLike--
      this.isLike=false
      this.likeButton = 'unlikeCSS';
    }
    console.log('like = '+ this.totalLike +this.isLike)
    console.log('unlike = '+ this.totalUnlike +this.isUnlike)
  }

}
