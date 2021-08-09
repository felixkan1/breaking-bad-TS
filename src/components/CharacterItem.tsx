import React, { useRef } from 'react';
import { Tooltip } from './Tooltip/Tooltip';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { addTag, removeTag } from '../actions/characters';
import { Character } from '../interface/interfaces';

interface AddTagPayload {
  characterIndex: number;
  tag: string;
}

interface AddTag {
  type: string;
  payload: AddTagPayload;
}

interface removeTagPayload {
  characterIndex: number;
  tagToRemove: string;
}

interface RemoveTag {
  type: string;
  payload: removeTagPayload;
}

interface Props {
  character: Character;
  addTag: any;
  removeTag: any;
}
const CharacterItem: React.FC<Props> = ({ character, addTag, removeTag }) => {
  const tagInput = useRef<HTMLInputElement>(null);
  const {
    char_id,
    name,
    birthday,
    occupation,
    img,
    nickname,
    portrayed,
    tags,
  } = character;

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.which = e.which || e.keyCode;
    //if enter key
    if (e.which === 13) {
      const tag = tagInput.current ? tagInput.current.value.trim() : '';
      if (tag === '') return;
      const characterIndex = char_id - 1;
      addTag(characterIndex, tag);
      if (tagInput.current) {
        tagInput.current.value = '';
      }
    }
  };
  const handleRemoveTag = (e: React.MouseEvent<HTMLDivElement>) => {
    const characterIndex = char_id - 1;
    const tagToremove = e.currentTarget.textContent;
    if (tagToremove) {
      removeTag(characterIndex, tagToremove);
    }
  };
  return (
    <div className="character-item">
      <img src={img} alt="character" />
      <div className="character-info">
        <h1 className="character-name">{name.toUpperCase()}</h1>
        <ul className="character-data-list">
          <div>Birthday: {birthday}</div>
          <div>Nickname: {nickname}</div>
          <div>Portrayed: {portrayed}</div>
          <div>
            Occupation:{' '}
            {
              <ul>
                {occupation.map((occupation: string) => (
                  <li>{occupation}</li>
                ))}
              </ul>
            }
          </div>

          <div className="tags">
            {tags.length > 0 &&
              tags.map((tag: string, index: number) => (
                <Tooltip text="Remove Tag" key={index}>
                  <div className="tag" onClick={handleRemoveTag}>
                    {tag}
                  </div>
                </Tooltip>
              ))}
          </div>
          <input
            ref={tagInput}
            type="text"
            className="tag-input"
            placeholder="Add a tag"
            autoComplete="off"
            onKeyUp={handleAddTag}
          />
        </ul>
      </div>
    </div>
  );
};

export default connect(null, { addTag, removeTag })(CharacterItem);
