import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  ADD_TAG,
  REMOVE_TAG,
} from './types';
import { getAllCharacters } from '../utils/api';
import { Dispatch } from 'react';
import { Character } from '../interface/interfaces';

type GetCharactersAction = {
  type: string;
  payload: Character[];
};

type GetCharactersErrorAction = {
  type: string;
  payload: any;
};

type AddTagPayload = {
  characterIndex: number;
  tag: string;
};

type AddTagAction = {
  type: string;
  payload: AddTagPayload;
};

type removeTagPayload = {
  characterIndex: number;
  tagToRemove: string;
};

type RemoveTagAction = {
  type: string;
  payload: removeTagPayload;
};

type CharacterActions = GetCharactersAction | GetCharactersErrorAction;

type TagActions = AddTagAction | RemoveTagAction;

export const getCharactersProfile = () => async (
  dispatch: Dispatch<CharacterActions>
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
  dispatch: Dispatch<TagActions>
) => {
  dispatch({
    type: ADD_TAG,
    payload: { characterIndex, tag },
  });
};

export const removeTag = (characterIndex: number, tagToRemove: string) => (
  dispatch: Dispatch<TagActions>
) => {
  dispatch({
    type: REMOVE_TAG,
    payload: { characterIndex, tagToRemove },
  });
};
