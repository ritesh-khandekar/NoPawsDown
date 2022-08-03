import React, { useState } from 'react';
import Header from './navbar/Header';
import NavExtraDark from './navbar/NavExtraDark';

function FreshWebsite() {
    let [currentElement, setElement] = useState(<Header/>);
    
    return (
        <>
            <NavExtraDark attachFn={setElement}/>
            {currentElement}
        </>
    )
}
export default FreshWebsite;