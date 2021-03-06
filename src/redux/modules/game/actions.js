import { createAction } from 'redux-actions'

const CONNECT_GAME = 'CONNECT_GAME'
const DISCONNECT_GAME = 'DISCONNECT_GAME'
const SHOW_GAME_STATUS = 'SHOW_GAME_STATUS'
const CHECK_GAME = 'CHECK_GAME'

const START_GAME = 'START_GAME'
const FINISH_GAME = 'FINISH_GAME'
const PAUSE_GAME = 'PAUSE_GAME'
const RESUME_GAME = 'RESUME_GAME'
const STOP_GAME = 'STOP_GAME'
const CONTROL_SUCCESS = 'CONTROL_SUCCESS'

const UPDATE_TIME = 'UPDATE_TIME'
const UPDATE_LAST_SHOT = 'UPDATE_LAST_SHOT'

const SOCKET_ERROR = 'SOCKET_ERROR'

export const types = {
  CONNECT_GAME,
  DISCONNECT_GAME,
  SHOW_GAME_STATUS,
  CHECK_GAME,
  CONTROL_SUCCESS,
  START_GAME,
  FINISH_GAME,
  PAUSE_GAME,
  RESUME_GAME,
  STOP_GAME,
  UPDATE_TIME,
  UPDATE_LAST_SHOT,
  SOCKET_ERROR
}

export const connectGame = createAction(CONNECT_GAME)
export const disconnectGame = createAction(DISCONNECT_GAME)
export const showGameStatus = createAction(SHOW_GAME_STATUS)
export const checkGame = createAction(CHECK_GAME)
export const startGame = createAction(START_GAME)
export const pauseGame = createAction(PAUSE_GAME)
export const resumeGame = createAction(RESUME_GAME)
export const stopGame = createAction(STOP_GAME)
export const controlSuccess = createAction(CONTROL_SUCCESS)
export const updateLastShot = createAction(UPDATE_LAST_SHOT)
export const finishGame = createAction(FINISH_GAME)
export const updateTime = createAction(UPDATE_TIME)
export const socketError = createAction(SOCKET_ERROR)
