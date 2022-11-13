import { FC } from 'react'

import { IGalleryItem } from '@/interfaces/Gallery.types'
import { IActor } from '@/interfaces/actor.types'
import { IMovie } from '@/interfaces/movie.types'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

interface T {
	items: IMovie[] | IActor[]
}

const Gallery: FC<{ items: IMovie[] }> = ({ items }) => {
	return (
		<>
			<div className={styles.gallery}>
				{items.map((item) => (
					<GalleryItem key={item.id} item={item} variant="vertical" />
				))}
			</div>
		</>
	)
}

export default Gallery
