export default interface Repository {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
    gravatar_id: string
    html_url: string
    followers_url: string
    repos_url: string
    type: string
  }
  html_url: string
  description: string
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  visibility: string
  default_branch: string
}


