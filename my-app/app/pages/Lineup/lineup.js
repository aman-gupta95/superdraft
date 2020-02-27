import React from 'react';
import TableCell from '../../components/TableCell';
import { StyledLineup } from './styles';

const Lineup = ({lineup=[]}) => {
    return (
        <StyledLineup>
            <TableCell><b>Your Lineup</b></TableCell>
            {lineup.map(char => {
                return (
                    <TableCell key={char.url}><a href={char.url} style={{color: 'white', textDecoration: 'none'}}>{char.name}</a></TableCell>
                )
            })}
        </StyledLineup>
    )
};

export default Lineup;