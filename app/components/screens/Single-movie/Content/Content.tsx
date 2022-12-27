import { FC } from 'react'

import MaterialIcon from '@/components/ui/materialIcon/MaterialIcon'

import { IMovieDescriptionItem } from '@/interfaces/movie.types'

import { parseReleaseData } from '@/utils/movie/parseReleaseData'
import { timeConvert } from '@/utils/movie/timeConvert'

import { getGenreUrl } from '@/configs/url.config'

import FavoriteButton from '../../../ui/favoriteButton/FavoriteButton'

import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'

const Content: FC<{ movie: IMovieDescriptionItem }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<FavoriteButton article={movie} typeArticle="movies" />
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.vote_average.toFixed(1)}</span>
			</div>
			<div className={styles.details}>
				<span>{parseReleaseData(movie.release_date, 0, 4)} · </span>
				<span>{movie.production_countries[0]?.iso_3166_1} · </span>
				<span>{timeConvert(movie.runtime)} min.</span>
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.map((item) => ({
					link: getGenreUrl(item.id),
					title: item.name,
					id: item.id.toString(),
				}))}
			/>
			{/* <ContentList
				name="Actors"
				links={movie.actors.map((a) => ({
					link: getActorUrl(a.slug),
					title: a.name,
					_id: a._id,
				}))}
			/> */}
		</div>
	)
}

export default Content
