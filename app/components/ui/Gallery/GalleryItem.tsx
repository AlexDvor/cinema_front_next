import cn from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

import { IGalleryItemProps } from '@/interfaces/movie.types'

import { myLoader } from '@/utils/image/imageLoader'

import styles from './Gallery.module.scss'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={''}
			className={cn(styles.item, {
				[styles.withText]: item.title,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				alt={item.title || item.name}
				src={`https://image.tmdb.org/t/p/w500${
					item.poster_path || item.profile_path
				}`}
				loader={myLoader}
				layout="fill"
				draggable={false}
				priority
			/>

			<div className={styles.content}>
				<div className={styles.title}>{item.title || item.name}</div>
			</div>
		</Link>
	)
}

export default GalleryItem
