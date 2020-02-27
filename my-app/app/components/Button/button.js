import React from 'react';

const Button = ({url, text, textColor, action}) => {
    return(
        <div onClick={() => action(url)}><p style={{color: textColor}}>{text}</p></div>
    )
}

export default Button;