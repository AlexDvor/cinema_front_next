import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IGalleryItem } from '@/interfaces/gallery.types'

import styles from './SearchList.module.scss'

// import { IWidgetMovie } from '../../MoviesContainer/movie.types'

const SearchList: FC<{ movies: IGalleryItem[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie.id} href={`/movie/${movie.link}`}>
						<Image
							src={movie.url || ''}
							width={50}
							height={50}
							objectFit="cover"
							objectPosition="top"
							alt={movie.name}
							draggable={false}
						/>
						<span>{movie.name}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
