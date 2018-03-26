import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('./App.scss');

const Hello = (props: {name: string}) => {
    return (
        <h1 className="app"> Hello {props.name} </h1>
    );
};

ReactDOM.render(
    <Hello name="World!!!" />,
    document.getElementById('root'),
);
