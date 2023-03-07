import { combineReducers } from "redux"

interface Repository {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
  html_url: string
  description: string
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  stargazers_count: number
  watchers_count: number
  forks_count: number
  default_branch: string
}

const initialState: Repository[] = [
  {
    id: 0,
    name: "",
    full_name: "",
    owner: {
      login: "",
      avatar_url: "",
      html_url: "",
    },
    html_url: "",
    description: "",
    created_at: "",
    updated_at: "",
    pushed_at: "",
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    forks_count: 0,
    default_branch: "",
  },
]

function repoReducer(state = initialState, action: any) {
  switch (action.type) {
    case "FETCH_REPOS":
      return {
        ...state,
        repository: action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ repoReducer })

export default rootReducer
