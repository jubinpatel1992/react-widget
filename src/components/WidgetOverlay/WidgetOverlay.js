import React, { useState, useEffect } from 'react';
import Tabs from '../Tabs/Tabs';
import './WidgetOverlay.css';

export default function WidgetOverlay(props) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    useEffect(() => { 
        setIsOverlayOpen(props.isOverlay) 
    }, [props.isOverlay]);

    const handleCloseOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    }

    return (
        <>
            {isOverlayOpen ?
                <div className="widgetoverlay-wrapper">
                    <div className="widgetoverlay-header">
                        <p>Powered by m8buy</p>
                        <button className="help-widgetoverlay"></button>
                        <button className="close-widgetoverlay" onClick={handleCloseOverlay}></button>
                    </div>
                    <div className="widgetoverlay-body">
                        <p className="title">Help me decide</p>
                        <p className="grey-content">Which one is better?</p>
                        <p className="title">Choose products:</p>                        
                        <Tabs />
                    </div>
                    <div className="widgetoverlay-footer">
                        <button className="invitebutton">Invite friends to help decide</button>
                    </div>
                </div>
            : ""}
        </>
    );
}