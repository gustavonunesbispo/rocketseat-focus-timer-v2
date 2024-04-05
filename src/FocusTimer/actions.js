import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function startTimer() {
  if (!state.isRunning) {
    state.isRunning = true
    document.documentElement.classList.toggle('running')
    timer.countdown()
  }
}

export function stopTimer() {
  timer.countdownStop();
}

export function addFiveMinutes() {
  timer.addMinutes()
}

export function removeFiveMinutes() {
  timer.removeMinutes()
}

export function forestSound() {
  if (state.isMute) {
    stopAllSounds();
    sounds.forestAudio.play();
  }
}

export function rainSound() {
  if (state.isMute) {
    stopAllSounds();
    sounds.rainAudio.play();
  }
}

export function coffeeShopSound() {
  if (state.isMute) {
    stopAllSounds();
    sounds.coffeeShopAudio.play();
  }
}

export function fireplaceSound() {
  if (state.isMute) {
    stopAllSounds();
    sounds.fireplaceAudio.play();
  }
}

function stopAllSounds() {
  sounds.forestAudio.pause();
  sounds.rainAudio.pause();
  sounds.coffeeShopAudio.pause();
  sounds.fireplaceAudio.pause();
}

export function resetTime() {
  timer.updateDisplay()
}

