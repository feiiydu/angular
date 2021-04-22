import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() targetScore = 0;
  
  starWidth =0;
  
  constructor() {
    this.ConvertToStar(this.targetScore);
  }

  ConvertToStar(targetScore : number) {
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.starWidth = this.targetScore * 75 / 5
  }

}
