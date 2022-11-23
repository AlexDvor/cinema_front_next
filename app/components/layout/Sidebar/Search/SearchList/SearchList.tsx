import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovieItem } from '@/interfaces/movie.types'

import { getMovieUrl, getPosterImage } from '@/configs/url.config'

import styles from './SearchList.module.scss'

// import { IWidgetMovie } from '../../MoviesContainer/movie.types'

const SearchList: FC<{ movies: IMovieItem[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie.id} href={getMovieUrl(movie.id)}>
						<Image
							src={getPosterImage(movie.poster_path)}
							width={50}
							height={50}
							objectFit="cover"
							objectPosition="top"
							alt={movie.title}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movie not found!</div>
			)}
		</div>
	)
}

export default SearchList
