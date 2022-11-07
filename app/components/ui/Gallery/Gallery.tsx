import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItem } from './Gallery.types'
import GalleryItem from './GalleryItem'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
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
