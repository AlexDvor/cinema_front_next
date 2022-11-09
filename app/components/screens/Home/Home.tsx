import { FC } from 'react'

import { DataActors, DataMovies, DataSlider } from '../../../../data.tempory'
import Gallery from '../../ui/Gallery/Gallery'
import Slider from '../../ui/Slider/Slider'
import SubHeading from '../../ui/SubHeading/SubHeading'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<>
			{DataSlider.length && <Slider slides={DataSlider} />}

			<div className="my-10">
				<SubHeading title={'Trending now'} />
				{DataMovies.length && <Gallery items={DataMovies} />}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{DataActors.length && <Gallery items={DataActors} />}
			</div>
		</>
	)
}

export default Home
