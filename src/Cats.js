import React from 'react';
import { Link } from 'react-router-dom';


function Cats({cats, match, history}) {

    const catLinks = cats.map(catName => (
        <li>
            <Link to={`${match.path}/${catName}`}>{catName}</Link>
        </li>
    ));

    return(
        <div>
            <ul>
                {catLinks}
            </ul>
            <button onClick={() => {
                // history.push lets us programmatically go to a different route.
                // You can use this instead of a <Link> component.
                // You will use this instead of <Link> if you need to trigger some other custom code, like a setState.
                history.push('/');
                // `History` is not an array, but you can image that it manages the paths you've been to as an array.
            }}>Go Home</button>
        </div>
    );
}


export default Cats;