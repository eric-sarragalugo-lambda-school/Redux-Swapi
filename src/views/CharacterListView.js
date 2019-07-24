import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    return this.props.fetching ? (
      <h1>FETCHING DATA...</h1>
    ) : this.props.error ? (
      <h1>{this.props.error}</h1>
    ) : (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
  };
};
export default connect(
  mapStateToProps,
  { fetchCharacters },
)(CharacterListView);
