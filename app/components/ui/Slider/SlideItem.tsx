import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { SliderProps } from '@/interfaces/slider.types'

import { getFullWidthBackdrop } from '@/configs/url.config'

import styles from './Slider.module.scss'

interface ISlideItem {
	slide: SliderProps
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({
	slide,
	buttonTitle = 'Watch Trailer',
}) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.id && (
				<Image
					layout="fill"
					className={styles.image}
					src={getFullWidthBackdrop(slide.posterPath)}
					alt={slide.title}
					draggable={false}
					priority
				/>
			)}

			<div className={styles.content}>
				<h2 className={styles.heading}>{slide.title}</h2>

				<button className={styles.button} onClick={() => push(slide.url)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
