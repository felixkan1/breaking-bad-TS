import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  ADD_TAG,
  REMOVE_TAG,
} from './types';
import { getAllCharacters } from '../utils/api';
import { Dispatch } from 'react';
import { Character } from '../interface/interfaces';

interface GetCharacters {
  type: string;
  payload: Character[];
}

interface GetCharactersError {
  type: string;
  payload: any;
}

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

export const getCharactersProfile = () => async (
  dispatch: Dispatch<GetCharacters | GetCharactersError>
) => {
  try {
    const res = await getAllCharacters();

    //add tags property to each character
    res.forEach((character: Character) => (character.tags = []));

    dispatch({
      type: GET_CHARACTERS,
      payload: res,
    });
  } catch (err: any) {
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: err,
    });
  }
};

export const addTag = (characterIndex: number, tag: string) => (
  dispatch: Dispatch<AddTag>
) => {
  dispatch({
    type: ADD_TAG,
    payload: { characterIndex, tag },
  });
};

export const removeTag = (characterIndex: number, tagToRemove: string) => (
  dispatch: Dispatch<RemoveTag>
) => {
  dispatch({
    type: REMOVE_TAG,
    payload: { characterIndex, tagToRemove },
  });
};
