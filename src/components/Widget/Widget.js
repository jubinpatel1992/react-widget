import React, { useState } from 'react';
import WidgetOverlay  from '../WidgetOverlay/WidgetOverlay';
import './Widget.css';

export default function Widget() {
    const [isOverlay, setIsOverlay] = useState(false);

    const handleOverlay = () => {
        setIsOverlay(!isOverlay);
    }

    return (
        <div>
            <WidgetOverlay isOverlay={isOverlay}/>
            <a id="widget-icon-button" onClick={handleOverlay}>
                <img src={process.env.REACT_APP_BASE_URL + "/infinity.svg"} ></img>
            </a>
        </div>
    );
}