import React from 'react';
import Ingredient from './Ingredient'
export default function Recipe(props) {

    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">{props.recipe.name}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {props.recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                <Ingredient name={ingredient} />
                            </li>
                        )}
                    </ul>
                    <h4>Recipe</h4>
                    <p class="card-text" dangerouslySetInnerHTML={{__html: props.recipe.recipe}}></p>
                </div>
            </div>
        </div>
    );
}
