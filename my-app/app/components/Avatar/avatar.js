import React from 'react';
import { OuterCircleDiv, InnerCircleDiv } from './styles';

const Avatar = ({name, eye_color}) => {
    const initials = name.split(/[ -]+/);
    return (
        <OuterCircleDiv>
            <InnerCircleDiv>
                <b>{initials[0][0]}{initials[1][0]}</b>
            </InnerCircleDiv>
        </OuterCircleDiv>
    );
}

export default Avatar;