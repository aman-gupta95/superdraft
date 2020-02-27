import React from 'react';
import Avatar from '../../Avatar';
import TableCell from '../../TableCell';
import Button from '../../Button';
import {StyledRow} from './styles';

const RowView = ({name, eye_color, url, birth_year, gender, height, mass, starships=[], vehicles=[], addCharacter, removeCharacter}) => {
    let added = false;
    return (
        <StyledRow>
            <td style={{display: 'flex', alignItems: 'center'}}>
                <Avatar name={name} eye_color={eye_color} />
                <div style={{marginLeft: '2px', color: 'white'}}>
                    <b>{name}</b>
                    <div>{birth_year}</div>
                </div>
            </td>
            <td>
                <TableCell>
                    <div>{gender}</div>
                </TableCell>
            </td>
            <td>
                <TableCell>
                    <div>{height}/{mass}</div>
                </TableCell>
            </td>
            <td>
                <TableCell>
                    <div>{`${starships.length}/${vehicles.length}`}</div>
                </TableCell>
            </td>
            <td>
                <TableCell>
                    {added?<Button textColor={'#AF3B40'} text={'REMOVE'} action={removeCharacter} url={url}/>:
                    <Button textColor={'#03C4FF'} text={'ADD'} action={addCharacter} url={url}/>}
                </TableCell>
            </td>
        </StyledRow>
    )
}

export default RowView;