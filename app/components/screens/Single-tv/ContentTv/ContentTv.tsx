import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { IDescriptionTvItem } from '@/interfaces/tv.types'

import { parseReleaseData } from '@/utils/movie/parseReleaseData'
import { timeConvert } from '@/utils/movie/timeConvert'

import { getGenreUrl } from '@/configs/url.config'

import FavoriteButton from '../../../ui/FavoriteButton/FavoriteButton'

import styles from './ContentTv.module.scss'
import ContentList from './ContentTvList/ContentTvList'

const Content: FC<{ tv: IDescriptionTvItem }> = ({ tv }) => {
	const { user } = useAuth()
	return (
		<div className={styles.content}>
			<h1>{tv.name}</h1>
			{user && <FavoriteButton article={tv} typeArticle="movies" />}
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{tv.vote_average.toFixed(1)}</span>
			</div>
			<div className={styles.details}>
				<span>{parseReleaseData(tv.first_air_date, 0, 4)} · </span>
				<span>{tv.production_countries[0]?.iso_3166_1} </span>
			</div>
			<ContentList
				name="Genres"
				links={tv.genres.map((item) => ({
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
