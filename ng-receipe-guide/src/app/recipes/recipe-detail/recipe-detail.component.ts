import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  ingredients: Ingredient[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList () {
    console.log('Adding: ', this.recipe.ingredients);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
