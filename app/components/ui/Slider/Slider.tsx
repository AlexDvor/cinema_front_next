import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

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

			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={sliderData[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
