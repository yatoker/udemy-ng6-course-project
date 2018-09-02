import { Recipe } from "./recipe-list/recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";


@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

      /*@Output()*/ recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    AddIngredientsToShoppingList(ingredients: Ingredient[]) {
        // ...ingredients is ec6 feature that converts array into list.
        this.shoppingListService.ingredients.push(...ingredients);
        this.shoppingListService.ingredientsChanged.emit(ingredients);
    }
}