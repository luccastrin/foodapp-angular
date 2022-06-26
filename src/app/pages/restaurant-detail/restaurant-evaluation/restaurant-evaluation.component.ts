import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from 'src/app/shared/models/restaurants/review.model';
import { RestaurantsService } from 'src/app/shared/services/restaurants.service';

@Component({
  selector: 'app-restaurant-evaluation',
  templateUrl: './restaurant-evaluation.component.html',
  styleUrls: ['./restaurant-evaluation.component.scss']
})
export class RestaurantEvaluationComponent implements OnInit {
  reviewsDetais: Reviews;
  idPathMenu: string;
  reviewImages: string[] = [
    './assets/images/reactions/loved.png',
    './assets/images/reactions/pissed.png',
    './assets/images/reactions/soso.png',
  ]

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit(): void {
    this.idPathMenu = this.route.parent.snapshot.paramMap.get('id');
    this.popularReviewsById(this.idPathMenu);
  }

  popularReviewsById(id) {
    this.restaurantsService.getReviewsById(id).subscribe(response => {
      this.reviewsDetais = response;
    })
  }
}
