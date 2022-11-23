import cn from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

import { IGalleryItemProps } from '@/interfaces/gallery.types'

import { getPosterImage } from '@/configs/url.config'

import styles from './Gallery.module.scss'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={item.url}
			className={cn(styles.item, {
				[styles.withText]: item.title,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				alt={item.title}
				src={getPosterImage(item.posterPath)}
				layout="fill"
				draggable={false}
				priority
			/>

			<div className={styles.content}>
				<div className={styles.title}>{item.title}</div>
			</div>
		</Link>
	)
}

export default GalleryItem
