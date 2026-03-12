import { FC, useEffect, useRef } from 'react'

import { useSlider } from '@/hooks/useSlider'

import { SliderProps } from '@/interfaces/slider.types'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'

interface ISlider {
	buttonTitle?: string
	sliderData: SliderProps[]
}

const AUTOPLAY_DELAY = 6000

const Slider: FC<ISlider> = ({ buttonTitle, sliderData }) => {
	const { handleClick, index, isNext, isPrev } = useSlider(sliderData.length)

	const autoplayRef = useRef<NodeJS.Timeout | null>(null)

	/* напрямок руху */
	const directionRef = useRef<'next' | 'prev'>('next')

	const stopAutoplay = () => {
		if (autoplayRef.current) {
			clearInterval(autoplayRef.current)
		}
	}

	const startAutoplay = () => {
		stopAutoplay()

		autoplayRef.current = setInterval(() => {
			/* якщо дійшли до кінця → змінюємо напрямок */
			if (!isNext) {
				directionRef.current = 'prev'
			}

			/* якщо дійшли до початку → змінюємо напрямок */
			if (!isPrev) {
				directionRef.current = 'next'
			}

			handleClick(directionRef.current)
		}, AUTOPLAY_DELAY)
	}

	useEffect(() => {
		startAutoplay()

		return () => stopAutoplay()
	}, [index, isNext, isPrev])

	return (
		<div
			className={styles.slider}
			onMouseEnter={stopAutoplay}
			onMouseLeave={startAutoplay}
		>
			{isPrev && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}

			<SlideItem
				key={index}
				slide={sliderData[index]}
				buttonTitle={buttonTitle}
			/>

			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
