import { $ } from '@core/dom';
import { createToolbar } from './toolbar.template';
import { ExcelStateComponent } from '@core/ExcelStateComponent';
import { defaultStyles } from '../../constans'

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyles'],
      ...options,
    })
  }

  prepare() {
    const initialState = defaultStyles
    this.initState(initialState)
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles)
    console.log('changes', changes)
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      const key = Object.keys(value)[0];
      this.$emit('toolbar:applyStyle', value)
    }
  }
}
