import { FC } from 'react'

import SubHeading from '@/components/ui/Heading/SubHeading'

import { IHome } from '@/interfaces/pages.types'

import Gallery from '../../ui/Gallery/Gallery'
import Slider from '../../ui/Slider/Slider'

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
