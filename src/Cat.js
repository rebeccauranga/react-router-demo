import React from 'react';


function Cat({match}) {
    return(
        <div>
            Hello, { match.params.cat }
            {/* <img src="https://bit.ly/2UMk9tS" /> */}
        </div>
    );
}


export default Cat;