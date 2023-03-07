import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Repository from "./repositoryInterface"

export interface RepositoryState {
  loading: boolean
  data: Repository[]
  error: string | null
}

const initialState: RepositoryState = {
  loading: false,
  data: [],
  error: null,
}

const repoSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepo.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRepo.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchRepo.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || "Something went wrong"
    })
  },
})

export const fetchRepo = createAsyncThunk("data/fetchRepo", async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/sandhikagalih/repos?per_page=6&sort=updated"
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const { actions } = repoSlice
export default repoSlice.reducer
