import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { IMovie } from '@/interfaces/movie.types'

// import { getGenresListEach } from '@/utils/movie/getGenresList'
import { getGenreUrl, getMovieUrl } from '@/configs/url.config'

import styles from './MovieList.module.scss'

const myLoader = ({ src }: any) => {
	return `https://image.tmdb.org/t/p/w500${src}`
}

const URL = 'https://image.tmdb.org/t/p/w500'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl('')}>
				<Image
					alt={movie.title}
					width={65}
					height={97}
					loader={myLoader}
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					{/* <div className={styles.genres}>
						{movie.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getGenreUrl(slug)}>
								<a>{getGenresListEach(idx, movie.genres.length, name)}</a>
							</Link>
						))}
					</div> */}
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
