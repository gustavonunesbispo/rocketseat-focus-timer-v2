import state from './state.js'
import * as el from './elements.js'
import { resetTime } from './actions.js'

export function countdown() {
  if (state.isRunning) {
    clearTimeout(state.countdownId)


    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
      seconds = 59
      minutes--
    }

    if (minutes < 0) {
      resetTime()
      return
    }


    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
  }
}

export function countdownStop() {
  if (state.isRunning) {
    clearTimeout(state.countdownId);
    state.isRunning = false;
    document.documentElement.classList.remove('running');
  }
}

export function addMinutes() {
  if (!state.isRunning) {
    let minutes = Number(el.minutes.textContent);
    minutes += 5;

    minutes = Math.max(5, minutes);
    minutes = Math.min(60, minutes);

    updateDisplay(minutes, Number(el.seconds.textContent));
  }
}

export function removeMinutes() {
  if (!state.isRunning) {
    let minutes = Number(el.minutes.textContent);
    minutes -= 5;

    minutes = Math.max(5, minutes);
    minutes = Math.min(60, minutes);

    updateDisplay(minutes, Number(el.seconds.textContent));
  }
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}