import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      state.pop(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});
console.log(songSlice.actions);

export { store };
export const { addSong } = songSlice.actions;
