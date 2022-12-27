import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/Banner/Banner'
import Gallery from '@/components/ui/Gallery/Gallery'
import SubHeading from '@/components/ui/Heading/SubHeading'

import { ISingleMovie } from '@/interfaces/single-movie.types'

import { Meta } from '@/utils/meta'

import { getFullWidthBackdrop, getPosterImage } from '@/configs/url.config'

import Content from './Content/Content'

// import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(
	() => import('@/components/ui/Video-palyer/VideoPlayer'),
	{
		ssr: false,
	}
)
// const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
// 	ssr: false,
// })

const SingleMovie: FC<ISingleMovie> = ({ movie, cast, similarMovies }) => {
	return (
		<>
			<Meta
				title={movie.title}
				description={`Watch ${movie.title}`}
				image={getPosterImage(movie.poster_path)}
			>
				<Banner
					imagePath={getFullWidthBackdrop(movie.backdrop_path)}
					Detail={() => <Content movie={movie} />}
				/>
				<h3 className="text-gray-500 my-4">{movie.overview}</h3>

				{/* <>
					<DynamicPlayer trailers={movie.videos.results} />
				</> */}

				{cast?.length && (
					<>
						<div className="mt-12">
							<SubHeading title="Cast" />
							<Gallery items={cast} />
						</div>
					</>
				)}

				<div className="mt-12">
					<SubHeading title="Similar" />
					<Gallery items={similarMovies} />
				</div>
			</Meta>
		</>
	)
}

export default SingleMovie
