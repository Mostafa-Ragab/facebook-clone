import React from 'react'
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLiverpoolFC%2Fvideos%2F346115633437673%2F&show_text=0&width=340" 
            width="340" 
            height="100%" 
            style={{border:"none",overflow:"hidden"}}
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">

            </iframe>
            
        </div>
    )
}

export default Widgets
