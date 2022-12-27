import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'

import { SliderProps } from '@/interfaces/slider.types'

import styles from './SliderNew.module.scss'

interface ISliderProps {
	sliderData: SliderProps[]
}

const SliderTest: FC<ISliderProps> = ({ sliderData }) => {
	const intervalId = useRef<NodeJS.Timeout | null>(null)
	const showcaseMovies = 5
	const timeoutTime = 7000
	const [i, setI] = useState(0)

	useEffect(() => {
		intervalId.current = setTimeout(() => {
			if (i >= showcaseMovies) {
				setI(0)
			} else {
				setI((prevState) => prevState + 1)
			}
		}, timeoutTime)

		return () => {
			clearTimeout(intervalId.current as NodeJS.Timeout)
		}
	}, [i])

	const handelClick = (index: number) => {
		setI(index)
		clearTimeout(intervalId.current as NodeJS.Timeout)
	}

	const switchItems = sliderData.length
		? sliderData.map((movie, index) => {
				if (index <= showcaseMovies) {
					return (
						<div
							key={index}
							// active={i === index ? 'active' : null}
							onClick={() => handelClick(index)}
						/>
					)
				} else return null
		  })
		: null

	return (
		<>
			<div className="rounded-xl overflow-hidden">
				{sliderData.length && (
					<div key={sliderData[i].id}>
						{/* <Animate to="1" from="0.2" attributeName="opacity"> */}
						<div
							className={styles.backgroundImage}
							style={{
								backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 0.8) 40%,rgba(0, 0, 0, 0) 60%),url('https://image.tmdb.org/t/p/original/${sliderData[i].posterPath}')`,
							}}
						>
							<div className={styles.info}>
								<h1 className={styles.title}>{sliderData[i].title}</h1>
								<p>
									{/* <Img src={logo} alt="Rating" /> {sliderData[i].vote_average} */}
								</p>
								<p>
									Release Date:
									{/* {new Date(sliderData[i].release_date).toDateString()} */}
								</p>
								{/* <p>{sliderData[i].overview}</p> */}
								<Link
									href={sliderData[i].url}
									className="p-2.5 btn-primary block text-center"
								>
									Thriler
								</Link>
							</div>
							<div className={styles.switchImg}>{switchItems}</div>
						</div>
						{/* </Animate> */}
					</div>
				)}
			</div>
		</>
	)
}

export default SliderTest
