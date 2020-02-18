import React, {useState} from "react";

function LessText({ text, maxLength }){
    text = "This is a line of text.";
    const [showLessText, setShowLessText] = useState(true);
    if (showLessText){
        return <div>
           <p>{text.substring(0, maxLength)}</p>
           <button className="expand" onClick={() => setShowLessText(false)}>
               <span>Read More</span>
           </button>
           <button className="lessen" onClick={() => setShowLessText(true)}>
               <span>Read Less</span>
           </button>
        </div>
    }
    else{
        return <div>
            <p>{text}</p>
            <button className="expand" onClick={() => setShowLessText(false)}>
                <span>Read More</span>
            </button>
            <button className="lessen" onClick={() => setShowLessText(true)}>
                <span>Read Less</span>
            </button>
        </div>
    }
}

export default LessText;