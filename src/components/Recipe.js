import React from 'react';
import Ingredient from './Ingredient'
export default function Recipe(props) {

    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.recipe.name}</h5>
                    <ul>
                        {props.recipe.ingredients.map(ingredient =>
                            <li key={ingredient.name}>
                                <Ingredient name={ingredient.name} />
                            </li>
                        )}
                    </ul>
                    <p class="card-text">{props.recipe.recipe}</p>
                </div>
            </div>
        </div>
    );
}
