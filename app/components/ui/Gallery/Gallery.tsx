import { FC, useRef, useState } from 'react'

import { IGalleryItem } from '@/interfaces/gallery.types'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'

interface IGallery {
	items: IGalleryItem[]
	showPlayBtn?: boolean
}

const DRAG_THRESHOLD = 6
const SCROLL_SPEED = 1.4

const Gallery: FC<IGallery> = ({ items, showPlayBtn = true }) => {
	const sliderRef = useRef<HTMLDivElement>(null)

	const startX = useRef(0)
	const scrollLeft = useRef(0)

	const isMouseDown = useRef(false)
	const isDraggingRef = useRef(false)

	const [isDragging, setIsDragging] = useState(false)

	const onMouseMove = (e: MouseEvent) => {
		if (!isMouseDown.current || !sliderRef.current) return

		const dx = e.clientX - startX.current

		if (!isDraggingRef.current && Math.abs(dx) > DRAG_THRESHOLD) {
			isDraggingRef.current = true
			setIsDragging(true)
		}

		if (!isDraggingRef.current) return

		sliderRef.current.scrollLeft = scrollLeft.current - dx * SCROLL_SPEED
	}

	const onMouseUp = () => {
		isMouseDown.current = false
		isDraggingRef.current = false
		setIsDragging(false)

		document.removeEventListener('mousemove', onMouseMove)
		document.removeEventListener('mouseup', onMouseUp)
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		if (e.button !== 0 || !sliderRef.current) return

		e.preventDefault()

		isMouseDown.current = true
		startX.current = e.clientX
		scrollLeft.current = sliderRef.current.scrollLeft

		document.addEventListener('mousemove', onMouseMove)
		document.addEventListener('mouseup', onMouseUp)
	}

	return (
		<div
			ref={sliderRef}
			className={`${styles.gallery} ${isDragging ? styles.dragging : ''}`}
			onMouseDown={handleMouseDown}
		>
			{items?.map((item) => (
				<GalleryItem
					key={item.id}
					item={item}
					variant="vertical"
					showPlayBtn={showPlayBtn}
					isDragging={isDragging}
				/>
			))}
		</div>
	)
}

export default Gallery
