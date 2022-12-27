import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/materialIcon/MaterialIcon'

import { IMovieDescriptionItem } from '@/interfaces/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl, getPosterImage } from '@/configs/url.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovieDescriptionItem }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.id)}>
				<Image
					alt={movie.title}
					width={65}
					height={97}
					src={getPosterImage(movie.poster_path)}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((item, idx) => (
							<Link key={item.id} href={getGenreUrl(item.id)}>
								{getGenresListEach(idx, movie.genres.length, item.name)}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.vote_average.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
