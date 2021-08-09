import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharactersProfile } from '../actions/characters';
//import { Scrollbars } from 'react-custom-scrollbars';
import CharacterItem from './CharacterItem';

interface Character {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  apperance: number[];
  portrayed: string;
  category: string;
  better_call_saul_apperance: string[];
  tags: string[];
}

interface CharactersState {
  characters: Character[];
}

interface Props {
  getCharactersProfile: any;
  characters: Character[];
}

// const scrollBarThumb = () => {
//   const thumbStyle = {
//     backgroundColor: 'rgb(119,119,119)',
//     borderRadius: '10px',
//   };
//   return <div style={{ ...thumbStyle }} />;
// };

const CharacterDashboard: React.FC<Props> = ({
  getCharactersProfile,
  characters,
}) => {
  const [nameSearchInput, setNameSearchInput] = useState('');
  const [tagSearchInput, setTagSearchInput] = useState('');

  useEffect(() => {
    getCharactersProfile();
  }, [getCharactersProfile]);

  const filterByName = (name: string) => {
    const nameSearch = nameSearchInput.toLowerCase();

    return name.toLowerCase().includes(nameSearch);
  };

  const filterByTags = (tags: string[]) => {
    const tagSearch = tagSearchInput.trim().toLocaleLowerCase();
    //empty spaces in tagSearchInput
    if (tagSearch === '') return true;

    if (tags.length === 0 && tagSearch !== '') {
      return false;
    } else {
      return tags.some((tag) => tag.toLowerCase().includes(tagSearch));
    }
  };

  return (
    <div className="character-dashboard">
      <div className="search-bars">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name"
          autoComplete="off"
          value={nameSearchInput}
          onChange={(e) => setNameSearchInput(e.target.value)}
        />
        <input
          type="text"
          className="search-bar"
          placeholder="Search by tag"
          autoComplete="off"
          value={tagSearchInput}
          onChange={(e) => setTagSearchInput(e.target.value)}
        />
      </div>

      {/* <Scrollbars
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
        renderThumbVertical={scrollBarThumb}
      > */}
      <div className="characters">
        {characters.length !== 0 &&
          characters
            .filter(
              (character: Character) =>
                filterByName(character.name) && filterByTags(character.tags)
            )
            .map((character: Character, index: number) => (
              <CharacterItem character={character} key={index} />
            ))}
      </div>
      {/* </Scrollbars> */}
    </div>
  );
};

CharacterDashboard.propTypes = {
  getCharactersProfile: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired,
};

const mapStateToProps = (state: CharactersState) => ({
  characters: state.characters,
});
export default connect(mapStateToProps, {
  getCharactersProfile,
})(CharacterDashboard);
