import { ReactElement } from 'react'
import { RepositoryInfo } from '../../../shared/types/dtos/repositories.dto.ts'
import style from './style.module.scss'

type RepositoryCardProps = Omit<RepositoryInfo, 'full_name' | 'id'>

export const RepositoryCard = ({
  name,
  owner,
  html_url: url,
  stargazers_count: stars,
  description,
}: RepositoryCardProps): ReactElement => {
  return (
    <a className={style.card} href={url} target="_blank">
      <div className={style.owner}>
        <img className={style.avatar} src={owner.avatar_url} alt="avatar" />
        <p>{owner.login}</p>
      </div>
      <div className={style.repository}>
        <p className={style.repositoryName}>{name}</p>
        <p className={style.repositoryDescription}>{description}</p>
      </div>
      <div className={style.star}>
        <span>&#9734;</span>
        <p>{stars}</p>
      </div>
    </a>
  )
}
