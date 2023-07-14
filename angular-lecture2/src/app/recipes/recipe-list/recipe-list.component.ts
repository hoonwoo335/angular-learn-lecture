import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test","https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_1280.jpg")
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
