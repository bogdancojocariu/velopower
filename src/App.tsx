import * as React from 'react';
import { Navigation } from './components/header';
require('./App.scss');

export const App = () => {
    return (
        <div>
            <Navigation />
            <h1>Welcome</h1>
        </div>
    );
};
