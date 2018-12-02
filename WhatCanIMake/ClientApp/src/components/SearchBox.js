import React, { Component } from 'react';
import { AddIngredient } from './AddIngredient';


export class SeachBox extends Component {

    static renderForecastsTable(forecasts) {
        return (
            <ul>
                {forecasts.map(forecast =>
                    <li key={forecast}>
                        <AddIngredient ingredient={forecast} />
                    </li>
                )}
            </ul>
        );
    }

    displayName = SeachBox.name

    constructor(props) {
        super(props);
        this.state = { forecasts: ["No Ingredients selected"] };
        this.findIngredients = this.findIngredients.bind(this);
    }


    findIngredients(event) {
        fetch('api/Ingredients/Get?Summary=' + event.target.value)
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data});

            });
    }


    render() {

        let contents = SeachBox.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                {contents}
                <input type="text" name="ingredientFinder" id="ingredientFinder" onKeyUp={this.findIngredients} />
            </div>
        );
    }
}
