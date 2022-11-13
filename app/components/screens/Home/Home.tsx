import { FC } from 'react'

import { IHome } from '@/interfaces/page.types'

import { DataSlider } from '../../../../data.tempory'
import Gallery from '../../ui/Gallery/Gallery'
import Slider from '../../ui/Slider/Slider'
import SubHeading from '../../ui/SubHeading/SubHeading'

const Home: FC<IHome> = ({ actors, movies }) => {
	return (
		<>
			{DataSlider.length && <Slider slides={DataSlider} />}

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
