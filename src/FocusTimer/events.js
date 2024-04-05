import * as el from './elements.js'
import * as actions from './actions.js'

export function registerTimerControls() {
  el.timerControls.addEventListener('click' , (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  }),

  el.soundControls.addEventListener('click' , (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}