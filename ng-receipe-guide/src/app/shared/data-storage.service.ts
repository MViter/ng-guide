import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

const url = 'https://ng-recipe-book-3c7b3.firebaseio.com/recipes.json';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}
    
    storeRecipes() {
        return this.http.put(url, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token =this.authService.getToken();
        
        this.http.get('https://ng-recipe-book-3c7b3.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response: any) => {
                const recipes = response;
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (response: any) => {
                const recipes: any = response;
                console.log(`recipes = ${JSON.stringify(recipes)}`);
                this.recipeService.setRecipes(recipes);
            }
        )
    }
}