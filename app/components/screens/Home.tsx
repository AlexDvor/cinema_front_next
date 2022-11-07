import { FC } from 'react'

import { DataMovies } from '../../../data.tempory'
import Layout from '../layout/Layout'
import Gallery from '../ui/Gallery/Gallery'
import SubHeading from '../ui/SubHeading/SubHeading'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<>
			<div>
				<SubHeading title={'Trending now'} />
				{DataMovies.length && <Gallery items={DataMovies} />}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{/* {actors.length && <Gallery items={actors} />} */}
			</div>
		</>
	)
}

export default Home
