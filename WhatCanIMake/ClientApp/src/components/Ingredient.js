import React, { Component } from 'react';

export class Ingredient extends Component {
    displayName = Ingredient.name

    constructor(props) {
        super(props);
    }

    static renderForecastsTable() {
        return (
            <ul>
                {this.props.ingredients.map(forecast =>
                    <li key={forecast}>
                        {forecast}
                    </li>
                )}
            </ul>
        );
    }

    render() {
        return (
        <div>
            {this.renderForecastsTable}
        </div>
        );
    }
}
