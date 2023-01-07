import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getData = createAsyncThunk("api/data", async () => {
  const response = await fetch(
    "http://www.mocky.io/v2/5d889c8a3300002c0ed7da42"
  );
  return await response.json();
});

const userSlice = createSlice({
  name: "userValue",
  initialState: {
    data: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = "Some error occured";
    },
  },
});

export { getData };

export default userSlice.reducer;
