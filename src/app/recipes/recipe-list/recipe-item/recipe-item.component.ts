import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Output() recipeItemSelected = new EventEmitter<void>();

  @Input('recipe') recipe: Recipe;

  ngOnInit() {
  }

  onSelected() {
    this.recipeItemSelected.emit();
  }

}
