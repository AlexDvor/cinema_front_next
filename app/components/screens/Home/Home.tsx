import { FC } from 'react'

import { IHome } from '@/interfaces/pages.types'

import Gallery from '../../ui/Gallery/Gallery'
import Slider from '../../ui/Slider/Slider'
import SubHeading from '../../ui/SubHeading/SubHeading'

const Home: FC<IHome> = ({ actors, movies, slider }) => {
	return (
		<>
			{slider.length && <Slider sliderData={slider} />}

			<div className="my-10">
				<SubHeading title={'Trending now'} />
				{movies.length && <Gallery items={movies} />}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</>
	)
}

export default Home
