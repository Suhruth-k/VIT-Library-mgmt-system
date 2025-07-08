import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: "light", // default and locked to light mode
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Optional: keep toggleTheme to avoid Redux errors if other parts import it
    toggleTheme: (state) => {
      state.theme = "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
