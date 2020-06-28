import { defaultStyles } from '../constans';
import {clone} from '@core/utils'

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

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
