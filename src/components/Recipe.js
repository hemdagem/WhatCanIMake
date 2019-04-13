import React from 'react';
import Ingredient from './Ingredient'
export default function Recipe(props) {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.recipe.name}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {props.recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                <Ingredient name={ingredient} />
                            </li>
                        )}
                    </ul>
                    <h4>Recipe</h4>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: props.recipe.recipe}}></p>
                </div>
            </div>
        </div>
    );
}
