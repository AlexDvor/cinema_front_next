import cn from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

import { IGalleryItemProps } from '@/interfaces/gallery.types'

import { getPosterImage } from '@/configs/url.config'

import styles from './Gallery.module.scss'

interface IGalleryItemExtended extends IGalleryItemProps {
	showPlayBtn?: boolean
	isDragging?: boolean
	disableHover?: boolean
}

const GalleryItem: FC<IGalleryItemExtended> = ({
	item,
	variant,
	showPlayBtn = true,
	isDragging,
	disableHover,
}) => {
	const handleClick = (e: React.MouseEvent) => {
		if (isDragging) {
			e.preventDefault()
			e.stopPropagation()
		}
	}

	return (
		<Link
			href={item.url}
			onClick={handleClick}
			draggable={false}
			className={cn(styles.item, {
				[styles.withText]: item.title,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
				[styles.noHover]: disableHover,
			})}
		>
			<div className={styles.poster}>
				<Image
					alt={item.title}
					src={getPosterImage(item.posterPath)}
					layout="fill"
					draggable={false}
					priority
					style={{ pointerEvents: 'none' }}
				/>
			</div>

			<div className={styles.hoverLayer}>
				{showPlayBtn && <div className={styles.playBtn}>▶</div>}

				<div className={styles.content}>
					<div className={styles.title}>{item.title}</div>
				</div>
			</div>
		</Link>
	)
}

export default GalleryItem
