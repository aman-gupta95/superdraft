import React from 'react';
import {StyledTableCell} from './styles';

const tableCell = ({children}) => {
    return (
        <StyledTableCell>
            {children}
        </StyledTableCell>
    )
}

export default tableCell;