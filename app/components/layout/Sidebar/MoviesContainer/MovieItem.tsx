import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { IMovieItem } from '@/interfaces/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

// import { getGenresListEach } from '@/utils/movie/getGenresList'
import { getGenreUrl, getMovieUrl, getPosterImage } from '@/configs/url.config'

import styles from './MovieList.module.scss'

const myLoader = ({ src }: ImageLoaderProps) => {
	return `https://image.tmdb.org/t/p/w500${src}`
}

const MovieItem: FC<{ movie: IMovieItem }> = ({ movie }) => {
	// const a = getGenresData(movie.genre_ids)
	// console.log(a)
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.id)}>
				<Image
					alt={movie.title}
					width={65}
					height={97}
					loader={myLoader}
					src={getPosterImage(movie.poster_path)}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					{/* <div className={styles.genres}>{movie.genre_ids.map((item)=>}</div> */}
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
