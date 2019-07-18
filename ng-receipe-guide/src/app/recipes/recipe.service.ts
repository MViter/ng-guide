import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            0,
            'Tasty Schnitzel',
            'A super-tasty schnitzel - just awsome!',
            'https://en.wikipedia.org/wiki/Schnitzel#/media/File:Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            1,
            'Big Fat Burger',
            'What else you need to say?',
            'https://commons.wikimedia.org/wiki/File:Lounge_Burger_Wiki.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe (index: number) {
        return this.recipes.slice()[index]; // slice() - gives a copy of the array, thought it won`t be a deep copy, so an object still are the same anyways, so slice() doesn`t matter:)
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}