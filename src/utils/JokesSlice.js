import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unsortedValues: [],
  value: {},
  selected: {
    key: "",
    value: []
  },
  singleJoke: {}
}

export const jokesSlice = createSlice({
  name: 'allJokes',
  initialState,
  reducers: {
    storeUnsorted: (state, action) => {
      state.unsortedValues = action.payload
    },
    store: (state, action) => {
      state.value = action.payload
    },
    changeSelected: (state, action) => {
      state.selected = { key: action.payload.key, value: action.payload.value }
    },
    storeSingle: (state, action) => {
      state.singleJoke = action.payload
    }
  },
})

export const { storeUnsorted, store, changeSelected, storeSingle } = jokesSlice.actions

export default jokesSlice.reducer