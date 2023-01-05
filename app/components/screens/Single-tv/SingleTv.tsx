import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/components/ui/Banner/Banner'
import Gallery from '@/components/ui/Gallery/Gallery'
import SubHeading from '@/components/ui/Heading/SubHeading'

import { Meta } from '@/utils/meta'

import { getFullWidthBackdrop, getPosterImage } from '@/configs/url.config'

import ContentTv from './ContentTv/ContentTv'
import { ISingleTvProps } from './single-tv.types'

const DynamicPlayer = dynamic(
	() => import('@/components/ui/Video-player/VideoPlayer'),
	{
		ssr: false,
	}
)

const SingleTv: FC<ISingleTvProps> = ({ tv, similarTv, cast }) => {
	return (
		<>
			<Meta
				title={tv.name}
				description={`Watch ${tv.name}`}
				image={getPosterImage(tv.poster_path)}
			>
				<Banner
					imagePath={getFullWidthBackdrop(tv.backdrop_path)}
					posterName={tv.name}
					Detail={() => <ContentTv tv={tv} />}
				/>
				<h3 className="text-gray-500 mt-4">{tv.overview}</h3>

				{/* <>
					<DynamicPlayer trailers={tv.videos?.results || []} movieKey={tv.id} />
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
					<Gallery items={similarTv} />
				</div>
			</Meta>
		</>
	)
}

export default SingleTv
