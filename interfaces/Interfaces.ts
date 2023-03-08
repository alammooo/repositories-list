export interface RepoInterface {
  id: number
  owner: {
    login: string
    avatar_url: string
    html_url: string
    type: string
  }
  name: string
  topics: string[]
  full_name: string
  html_url: string
  visibility: string
  size: number
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
  description: string
  created_at: string
  pushed_at: string
  open_issues: number
  default_branch: string
}

export interface RepoSlice {
  value: number
  status: "idle" | "loading" | "failed"
}