// import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/Banner/Banner'
import Gallery from '@/components/ui/Gallery/Gallery'
import SubHeading from '@/components/ui/Heading/SubHeading'

import { IGalleryItem } from '@/interfaces/gallery.types'
import { IMovieDescription } from '@/interfaces/movie.types'
import { ISingleMovie } from '@/interfaces/single-movie.types'

import { getOriginalBackdrop } from '@/configs/url.config'

// import { Meta } from '@/utils/meta'
import Content from './Content/Content'

// import { useUpdateCountOpened } from './useUpdateCountOpened'

// const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
// 	ssr: false,
// })
// const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
// 	ssr: false,
// })

const SingleMovie: FC<ISingleMovie> = ({ movie, cast, similarMovies }) => {
	console.log('🚀 - cast', cast)
	// useUpdateCountOpened(movie.slug)

	return (
		<>
			<Banner
				imagePath={getOriginalBackdrop(movie.backdrop_path)}
				Detail={() => <Content movie={movie} />}
			/>
			<h3 className="text-gray-500 my-4">{movie.overview}</h3>

			{/* {movies.length && <Gallery items={movies} />} */}

			<div className="mt-12">
				<SubHeading title="Cast" />
				<Gallery items={cast} />
			</div>

			<div className="mt-12">
				<SubHeading title="Similar" />
				{/* <Gallery items={similarMovies} /> */}
			</div>
		</>
	)

	// return (
	// 		<Meta title={movie.title} description={`Watch ${movie.title}`}>
	// 			<Banner
	// 				imagePath={movie.backdrop_path}
	// 				Detail={() => <Content movie={movie} />}
	// 			/>

	// 			{/* <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} /> */}

	// 			<div className="mt-12">
	// 				<SubHeading title="Similar" />
	// 				<Gallery items={similarMovies} />
	// 			</div>

	// 			{/* <DynamicRateMovie slug={movie.slug} _id={movie._id} /> */}
	// 		</Meta>
	// 	)
}

export default SingleMovie
