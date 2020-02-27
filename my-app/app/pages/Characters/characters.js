import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RowView from '../../components/Character/RowView';
import TableCell from '../../components/TableCell';
import Lineup from '../Lineup';
import {StyledRow} from '../../components/Character/RowView/styles';
import { setCharacter, addCharacterToForm, setFilterString } from '../../actions/character';
import {fetchAllCharacters} from '../../services/Characters';
import { StyledInput } from './styles';
class Characters extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchAllCharacters().then(response => {
      this.props.setCharacter(response);
    });
  }

  addCharacterToForm = (name) => (url) => {
    let duplicate=false;
    this.props.lineup.forEach(char => {
      if(char.url===url) duplicate=true;
    })
    if(duplicate!==true)
    this.props.addCharacterToForm({name, url});
  }
  
  removeCharacterFromForm = (name, url) => {

  }

  setFilterString = () => {
    let inputString = document.getElementById('search').value
    this.props.setFilterString(inputString);
  }

  resetFilterString = () => {
    document.getElementById('search').value = '';
    this.props.setFilterString('');
  }

  render() {
   return (
     <div style={{backgroundColor: '#2A2C33', padding: '10px'}}>
      <div style={{width: '40%', display: 'flex', margin: '10px'}}>
        <StyledInput id='search' placeholder={'Find Players'}/>
        <button onClick={this.setFilterString}>Search</button>
        <button onClick={this.resetFilterString}>Reset</button>
      </div>
      <div style={{display: 'flex'}}>
        <div  style={{width: '85%', overflow: 'auto'}}>
          <table>
            <thead>
              <StyledRow>
                <th><TableCell>Character Name & Birth</TableCell></th>
                <th><TableCell>Gender</TableCell></th>
                <th><TableCell>Height/Weight</TableCell></th>
                <th><TableCell>No. of Starships/Vehicles</TableCell></th>
                <th><TableCell /></th>
              </StyledRow>
            </thead>
            <tbody>
              {this.props.characters.results.map( character => {
                if(character.name.indexOf(this.props.filterString) >=0)
                return (
                  <RowView 
                    key={character.url} 
                    {...character} 
                    addCharacter={this.addCharacterToForm(character.name)} 
                    removeCharacter={this.removeCharacterFromForm}/>
                );
              })}
            </tbody>
          </table>
      </div>
      <div style={{width: '15%'}}>
        <Lineup lineup={this.props.lineup}/>
      </div>  
      </div>
     </div>
   );
  }
}

const mapStateToProps = state => {
  return { 
    characters: state.character.characters,
    lineup: state.character.lineup,
    filterString: state.character.filterString
  };
};

const mapDispatchToProps  = {
  setCharacter,
  addCharacterToForm,
  setFilterString
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Characters));
