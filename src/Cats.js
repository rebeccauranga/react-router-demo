import React from 'react';
import { Link } from 'react-router-dom';

const arrayOfCats = [
    'sebby',
    'emmy',
    'oakley',
    'milla'
]


function Cats(props) {

    const catLinks = arrayOfCats.map(catName => (
        <li>
            <Link to={`${props.match.path}/${catName}`}>{catName}</Link>
        </li>
    ));

    return(
        <div>
            <h1>Look at all those chickenths</h1>
            <ul>
                {catLinks}
            </ul>
        </div>
    );
}


export default Cats;