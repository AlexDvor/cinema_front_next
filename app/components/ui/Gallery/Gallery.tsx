import { FC } from 'react'

import { IGallery, IGalleryItemProps } from '@/interfaces/Gallery.types'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery: FC<IGallery> = ({ items }) => {
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
