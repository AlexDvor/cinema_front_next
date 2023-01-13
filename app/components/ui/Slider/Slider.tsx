import { FC } from 'react'

import { useSlider } from '@/hooks/useSlider'

import { SliderProps } from '@/interfaces/slider.types'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'

interface ISlider {
	buttonTitle?: string
	sliderData: SliderProps[]
}

const Slider: FC<ISlider> = ({ buttonTitle, sliderData }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		sliderData.length
	)

	return (
		<div className={styles.slider}>
			{isPrev && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}

			<SlideItem slide={sliderData[index]} buttonTitle={buttonTitle} />

			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
