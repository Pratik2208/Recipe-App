import { Component, Input } from '@angular/core';
import { Recipe } from '../recepi.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

@Input() recipe : Recipe;

}
