import React, { useRef } from 'react';
import './home.scss';

function Homepage() {
    const inputRef = useRef(null);

    return (
        <div className="root">
            I am looking for...
            <input type="text" className="search-bar" ref={inputRef} />
        </div>
    );
}

export default Homepage;
