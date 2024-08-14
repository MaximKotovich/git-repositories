export type RepositoriesResponseDto = {
  total_count: number
  items: RepositoryInfo[]
}

export type RepositoryInfo = {
  id: number
  name: string
  full_name: string
  owner: {
    id: number
    avatar_url: string
    login: string
  }
  html_url: string
  description: string
  stargazers_count: number
}

export type RepositoriesQueryParams = {
  sort: string
  order: 'desc' | 'asc'
  q: string
  per_page: number
  page: number
}
