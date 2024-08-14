import { ReactElement, useEffect, useState } from 'react'
import { useSearchRepositoriesByParams } from '../../../shared/api/repositories.api.ts'
import style from './style.module.scss'
import { RepositoriesQueryParams } from '../../../shared/types/dtos/repositories.dto.ts'
import { RepositoryCard } from '../../../entities/repository-card'
import { CountRepositoriesSelect } from '../../../entities/count-repositories-select'
import { calculatePageCount } from '../lib/utils.ts'
import { Pagination } from '../../../shared/ui-kit/pagination'
import { Spinner } from '../../../shared/ui-kit/spinner'
import { Search } from '../../../entities/search-input'

const languageParam = 'language:typescript'

export const RepositoriesPage = (): ReactElement => {
  const { mutate: getRepositoriesMutation, data, isPending } = useSearchRepositoriesByParams()
  const [queryParams, setQueryParams] = useState<RepositoriesQueryParams>({
    sort: 'stars',
    order: 'desc',
    q: languageParam,
    per_page: 10,
    page: 1,
  })
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    getRepositoriesMutation(queryParams)
  }, [queryParams])

  useEffect(() => {
    setQueryParams((prevState) => ({ ...prevState, q: `${searchValue} ${languageParam}` }))
  }, [searchValue])

  const handleChangeCountRepository = (value: string): void => {
    setQueryParams((prevState) => ({ ...prevState, per_page: Number(value) }))
  }

  const handleChangePage = (page: number): void => {
    setQueryParams((prevState) => ({ ...prevState, page }))
  }

  const handleChangeSort = (sort: string, order: 'asc' | 'desc'): void => {
    setQueryParams((prevState) => ({ ...prevState, sort, order }))
  }

  return (
    <section className={style.container}>
      <Search onChange={setSearchValue} />
      <div className={style.cardsHeader}>
        <p>Owner</p>
        <p>Repository</p>
        <p
          onClick={() => handleChangeSort('stars', queryParams.order === 'desc' ? 'asc' : 'desc')}
          className={style.starOrder}
        >
          Stars <span>{queryParams.order === 'desc' ? '↓' : '↑'}</span>
        </p>
      </div>
      {isPending ? (
        <div className={style.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <div className={style.repositoryList}>
          {data?.items.map((item) => (
            <RepositoryCard
              key={item.id}
              name={item.name}
              owner={item.owner}
              html_url={item.html_url}
              description={item.description}
              stargazers_count={item.stargazers_count}
            />
          ))}
        </div>
      )}
      <div className={style.pagination}>
        <div className={style.selectCountItems}>
          <CountRepositoriesSelect onChange={handleChangeCountRepository} value={queryParams.per_page.toString()} />
        </div>
        {data?.total_count && (
          <Pagination
            forcePage={queryParams.page - 1}
            onChange={handleChangePage}
            pageCount={calculatePageCount(queryParams.per_page, data.total_count)}
          />
        )}
      </div>
    </section>
  )
}
