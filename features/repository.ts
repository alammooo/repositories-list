import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Repository from "./repositoryInterface"

const initialState: Repository[] = [
  {
    id: 0,
    name: "",
    full_name: "",
    owner: {
      login: "",
      avatar_url: "",
      gravatar_id: "",
      html_url: "",
      followers_url: "",
      repos_url: "",
      type: "",
    },
    html_url: "",
    description: "",
    fork: false,
    created_at: "",
    updated_at: "",
    pushed_at: "",
    stargazers_count: 0,
    watchers_count: 0,
    forks_count: 0,
    visibility: "",
    default_branch: "",
  },
]
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
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const { actions } = dataSlice
export default dataSlice.reducer
