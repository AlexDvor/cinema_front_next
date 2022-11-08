import Link from 'next/link'
import { FC } from 'react'

// import { IMovieList } from './movie.types'
// import { IGalleryItem } from '@/interfaces/Gallery.types'
import { IMovie } from '@/interfaces/movie.types'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'

interface IMovieList {
	link: string
	movies: IMovie[]
	title: string
}

const MovieList: FC<{ list: IMovieList }> = ({
	list: { movies, title, link },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie.id} movie={movie} />
			))}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}

export default MovieList
