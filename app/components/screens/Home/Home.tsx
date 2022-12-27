import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'

import logoImage from '@/assets/images/logo.svg'

import { Meta } from '@/utils/meta'

import { IHome } from '../../../../pages'
import Slider from '../../ui/Slider/Slider'
import Gallery from '../../ui/gallery/Gallery'

const Home: FC<IHome> = ({ actors, movies, slider, tvSerials }) => {
	return (
		<>
			<Meta
				title="Watch movies online"
				description="Watch MovieApp movies and TV shows online or stream right to your browser."
				image={logoImage}
			>
				{slider.length && <Slider sliderData={slider} />}

				<Heading
					title="Watch trailer online"
					className="text-gray-500 mb-8 text-xl"
				/>

				<div className="my-10">
					<SubHeading title={'Trending now'} />
					{movies.length && <Gallery items={movies} />}
				</div>

				<div className="my-10">
					<SubHeading title="TV Series" />
					{tvSerials.length && <Gallery items={tvSerials} />}
				</div>

				<div className="my-10">
					<SubHeading title="Best actors" />
					{actors.length && <Gallery items={actors} />}
				</div>
			</Meta>
		</>
	)
}

export default Home
