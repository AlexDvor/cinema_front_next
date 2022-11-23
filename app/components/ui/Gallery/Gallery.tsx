import { FC } from 'react'

import { IGalleryItem } from '@/interfaces/gallery.types'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<>
			<div className={styles.gallery}>
				{items &&
					items.map((item) => (
						<GalleryItem key={item.id} item={item} variant="vertical" />
					))}
			</div>
		</>
	)
}

export default Gallery
