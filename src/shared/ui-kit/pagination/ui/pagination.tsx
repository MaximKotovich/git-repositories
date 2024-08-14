import { ReactElement } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import style from './style.module.scss'

type PaginationProps = {
  onChange: (page: number) => void
} & Omit<ReactPaginateProps, 'onPageChange'>

export const Pagination = (props: PaginationProps): ReactElement => {
  return (
    <ReactPaginate
      marginPagesDisplayed={1}
      previousLabel=" < "
      nextLabel=" > "
      containerClassName={style.paginationContainer}
      pageClassName={style.page}
      activeClassName={style.activePage}
      previousClassName={style.navigationButton}
      nextClassName={style.navigationButton}
      onPageChange={({ selected }) => props.onChange(selected + 1)}
      {...props}
    />
  )
}
