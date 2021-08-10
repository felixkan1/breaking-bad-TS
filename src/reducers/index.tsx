import { combineReducers } from 'redux';
import characters from './characters';
import { Character } from '../interface/interfaces';

type AppState = {
  characters: Character[];
};

export default combineReducers<AppState>({ characters });
