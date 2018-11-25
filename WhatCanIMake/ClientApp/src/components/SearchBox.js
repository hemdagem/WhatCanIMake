import React, { Component } from 'react';
import { Ingredient } from './Ingredient';


export class SeachBox extends Component {
    displayName = SeachBox.name

    constructor(props) {
        super(props);
        this.state = { forecasts: ["No Ingredients selected"] };
        this.findIngredients = this.findIngredients.bind(this);
    }


    findIngredients(event) {
        fetch('api/SampleData/WeatherForecasts?Summary='+event.target.value)
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });

            });
    }

    static renderForecastsTable(forecasts) {
        return (
            <ul>
                {forecasts.map(forecast =>
                    <li key={forecast}>
                        {forecast}
                    </li>
                )}
            </ul>
        );
    }


    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : SeachBox.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                {contents}
                <Ingredient ingredient={this.state.forecasts} />
                <input type="text" name="ingredientFinder" id="ingredientFinder" onKeyUp={this.findIngredients} />
            </div>
        );
    }
}
