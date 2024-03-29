import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { IMovieDescriptionItem } from '@/interfaces/movie.types'

import { parseReleaseData } from '@/utils/movie/parseReleaseData'
import { timeConvert } from '@/utils/movie/timeConvert'

import { getGenreUrl } from '@/configs/url.config'

import FavoriteButton from '../../../ui/FavoriteButton/FavoriteButton'

import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'

const Content: FC<{ movie: IMovieDescriptionItem }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			{user && <FavoriteButton article={movie} typeArticle="movies" />}
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.vote_average.toFixed(1)}</span>
			</div>
			<div className={styles.details}>
				<span>{parseReleaseData(movie.release_date, 0, 4)} · </span>
				<span>{movie.production_countries[0]?.iso_3166_1} · </span>
				{movie.runtime && <span>{movie.runtime} min.</span>}
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.map((item) => ({
					link: getGenreUrl(item.id),
					title: item.name,
					id: item.id.toString(),
				}))}
			/>
		</div>
	)
}

export default Content
