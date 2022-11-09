import cn from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

import { IGalleryItemProps } from '@/interfaces/Gallery.types'

import styles from './Gallery.module.scss'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={''}
			className={cn(styles.item, {
				[styles.withText]: item.name,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				alt={item.name}
				src={item.url}
				layout="fill"
				draggable={false}
				priority
			/>
			{item.name && (
				<div className={styles.name}>
					<div className={styles.title}>{item.name}</div>
					{item.name && <div className={styles.subTitle}> {item.name}</div>}
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
