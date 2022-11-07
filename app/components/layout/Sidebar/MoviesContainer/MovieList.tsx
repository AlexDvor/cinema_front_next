import Link from 'next/link'
import { FC } from 'react'

// import { IMovieList } from './movie.types'
import { IGalleryItem } from '@/interfaces/Gallery.types'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'

const MovieList: FC<{ list: IGalleryItem }> = ({
	list: { link, movies, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>See more</a>
			</Link>
		</div>
	)
}

export default MovieList
