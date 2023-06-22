import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  side: false,
}

export const togglerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state) => {
        state.side = !state.side;
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = togglerSlice.actions

export default togglerSlice.reducer