import { storage } from '@core/utils';
import { defaultStyles } from '../constans';

const defaultState = {
  title: 'Новая таблица',
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
})
export const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState;
