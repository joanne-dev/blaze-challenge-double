import { createSlice } from '@reduxjs/toolkit'
import { Mode, states } from '../utils/enums/enums.ts'

const betState = {
  state: states.WAITING,
  betButtons: {
    redButton: {
      isActive: false,
      className: 'bet-disabled',
      disabled: false
    },
    yellowButton: {
      isActive: false,
      className: 'bet-disabled',
      disabled: false
    },
    blueButton: {
      isActive: false,
      className: 'bet-disabled',
      disabled: false
    }
  },
  betAmount: 100,
  betTypes: {
    normal: {
      isActive: true,
      className: 'mode-active'
    },
    auto: {
      isActive: false,
      className: 'mode-disabled'
    },
    free: {
      isActive: false,
      className: 'mode-disabled'
    }
  },
  profit: 0,
  winAmount: 0,
  colorWin: '',
  colorBet: '',
  isRampAnimationShowed: false,
  rollingTime: 7,
  isLoadingShowed: true
}

export const betStateSlice = createSlice({
  name: 'betState',
  initialState: betState,
  reducers: {
    activeRedButton: (state) => {
      state.betButtons.redButton.className = 'red-active'
      state.colorBet = 'red'
      state.betButtons.redButton.isActive = !state.betButtons.redButton.isActive

      state.betButtons.blueButton.className = 'bet-disabled'
      state.betButtons.blueButton.isActive = false

      state.betButtons.yellowButton.className = 'bet-disabled'
      state.betButtons.yellowButton.isActive = false
    },

    activeBlueButton: (state) => {
      state.betButtons.blueButton.className = 'blue-active'
      state.betButtons.blueButton.isActive = !state.betButtons.blueButton.isActive
      state.colorBet = 'blue'
      state.betButtons.redButton.className = 'bet-disabled'
      state.betButtons.redButton.isActive = false

      state.betButtons.yellowButton.className = 'bet-disabled'
      state.betButtons.yellowButton.isActive = false
    },
    activeYellowButton: (state) => {
      state.betButtons.yellowButton.className = 'yellow-active'
      state.betButtons.yellowButton.isActive = !state.betButtons.yellowButton.isActive
      state.colorBet = 'yellow'
      state.betButtons.blueButton.className = 'bet-disabled'
      state.betButtons.blueButton.isActive = false

      state.betButtons.redButton.className = 'bet-disabled'
      state.betButtons.redButton.isActive = false
    },

    setBet2xAmount: (state) => {
      state.betAmount = state.betAmount * 2
    },
    setBetMoreHalfAmount: (state) => {
      state.betAmount = state.betAmount + state.betAmount / 2
    },
    validateIfUserHasWon: (state, action) => {
      if (action.payload.colorWin === state.colorBet) {
        state.isRampAnimationShowed = true
      } else {
        state.state = states.WAITING
        state.isLoadingShowed = true
      }
    },
    changeRampAnimationVisibility: (state) => {
      state.isRampAnimationShowed = !state.isRampAnimationShowed
    },
    setBetType: (state, action) => {
      switch (action.payload) {
        case Mode.NORMAL:
          state.betTypes.normal.isActive = true
          state.betTypes.normal.className = 'mode-active'

          state.betTypes.auto.isActive = false
          state.betTypes.auto.className = 'mode-disabled'

          state.betTypes.free.isActive = false
          state.betTypes.free.className = 'mode-disabled'
          break
        case Mode.AUTO:
          state.betTypes.auto.isActive = true
          state.betTypes.auto.className = 'mode-active'

          state.betTypes.normal.isActive = false
          state.betTypes.normal.className = 'mode-disabled'

          state.betTypes.free.isActive = false
          state.betTypes.free.className = 'mode-disabled'
          break
        case Mode.FREE:
          state.betTypes.free.isActive = true
          state.betTypes.free.className = 'mode-active'

          state.betTypes.normal.isActive = false
          state.betTypes.normal.className = 'mode-disabled'

          state.betTypes.auto.isActive = false
          state.betTypes.auto.className = 'mode-disabled'
          break
      }
    },
    setState: (state, action) => {
      state.state = action.payload
    },
    changeLoadingVisibility: (state) => {
      state.isLoadingShowed = !state.isLoadingShowed
      state.rollingTime = state.rollingTime === 0 ? 7 : state.rollingTime
    },
    setRollingTime: (state, action) => {
      state.rollingTime = action.payload
    },
    blockBetButtons: (state) => {
      state.betButtons.redButton.disabled = state.colorBet !== 'red'
      state.betButtons.redButton.isActive = false

      state.betButtons.blueButton.disabled = state.colorBet !== 'blue'
      state.betButtons.blueButton.isActive = false

      state.betButtons.yellowButton.disabled = state.colorBet !== 'yellow'
      state.betButtons.yellowButton.isActive = false
    },
    unblockBetButtons: (state) => {
      state.colorBet = ''
      state.betButtons.redButton.disabled = false
      state.betButtons.redButton.className = 'bet-disabled'
      state.betButtons.redButton.isActive = false

      state.betButtons.blueButton.disabled = false
      state.betButtons.blueButton.className = 'bet-disabled'
      state.betButtons.blueButton.isActive = false

      state.betButtons.yellowButton.disabled = false
      state.betButtons.yellowButton.className = 'bet-disabled'
      state.betButtons.yellowButton.isActive = false
    }
  }
})
export const {
  activeRedButton,
  activeBlueButton,
  activeYellowButton,
  setBetType,
  setBet2xAmount,
  validateIfUserHasWon,
  setBetMoreHalfAmount,
  changeRampAnimationVisibility,
  setState,
  setRollingTime,
  changeLoadingVisibility,
  unblockBetButtons,
  blockBetButtons
} = betStateSlice.actions
export default betStateSlice.reducer
