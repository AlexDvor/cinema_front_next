import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Slider.module.scss'

type IGalleryItem = {
	id: number
	name: string
	url: StaticImageData | string
	link: string
}

interface ISlideItem {
	slide: IGalleryItem
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({
	slide,
	buttonTitle = 'Watch Trailer',
}) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.url && (
				<Image
					layout="fill"
					className={styles.image}
					src={slide.url}
					alt={slide.name}
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={styles.content}>
				<div className={styles.heading}>{slide.name}</div>
				<div className={styles.subHeading}>{slide.name}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
