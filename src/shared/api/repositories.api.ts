import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { axiosInstance } from './base-axios.ts'
import { RepositoriesQueryParams, RepositoriesResponseDto } from '../types/dtos/repositories.dto.ts'
import { AxiosError, AxiosResponse } from 'axios'

const URI: { [key: string]: string } = {
  search: '/search/repositories',
}

export function useSearchRepositoriesByParams(): UseMutationResult<
  RepositoriesResponseDto,
  AxiosError,
  RepositoriesQueryParams
> {
  return useMutation<RepositoriesResponseDto, AxiosError, RepositoriesQueryParams>({
    mutationFn: async (params: RepositoriesQueryParams) => {
      const response: AxiosResponse<RepositoriesResponseDto> = await axiosInstance.get(URI.search, {
        params,
      })
      return response.data
    },
  })
}
