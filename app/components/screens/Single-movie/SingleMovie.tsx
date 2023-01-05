import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/Banner/Banner'
import Gallery from '@/components/ui/Gallery/Gallery'
import SubHeading from '@/components/ui/Heading/SubHeading'

import { Meta } from '@/utils/meta'

import { getFullWidthBackdrop, getPosterImage } from '@/configs/url.config'

import Content from './Content/Content'
import { ISingleMovie } from './single-movie.types'

const DynamicPlayer = dynamic(
	() => import('@/components/ui/Video-player/VideoPlayer'),
	{
		ssr: false,
	}
)

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
					posterName={movie.title}
				/>
				<h3 className="text-gray-500 mt-4">{movie.overview}</h3>

				{/* <>
					<DynamicPlayer trailers={movie.videos.results} movieKey={movie.id} />
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
