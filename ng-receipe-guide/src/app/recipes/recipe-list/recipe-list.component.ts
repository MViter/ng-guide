import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test', 'https://get.pxhere.com/photo/cafe-restaurant-dish-food-cooking-menu-recipe-closeup-baking-fast-food-lunch-cuisine-pizza-nutrition-tasty-snacks-quiche-vegetarian-food-gastronomy-pizzeria-appetizing-italian-food-tarte-flamb-e-business-lunch-pizza-cheese-european-food-sicilian-pizza-zwiebelkuchen-flatbread-pizza-stone-california-style-pizza-1372752.jpg'),
    new Recipe('Another Test Recipe2', 'This is simply a test2', 'https://get.pxhere.com/photo/cafe-restaurant-dish-food-cooking-menu-recipe-closeup-baking-fast-food-lunch-cuisine-pizza-nutrition-tasty-snacks-quiche-vegetarian-food-gastronomy-pizzeria-appetizing-italian-food-tarte-flamb-e-business-lunch-pizza-cheese-european-food-sicilian-pizza-zwiebelkuchen-flatbread-pizza-stone-california-style-pizza-1372752.jpg')
  
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
