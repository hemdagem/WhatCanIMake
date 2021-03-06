import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';

export default function App() {
    return (
        <div>
            <Layout>
                <Route exact path='/' component={Home} />
            </Layout>
        </div>
    );
}
