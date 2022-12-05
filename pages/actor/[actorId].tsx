import { NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/Gallery/Gallery'
import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'
import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { IMovieItem } from '@/interfaces/movie.types'

import { ActorServices } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getMovieUrl, getPosterImage } from '@/configs/url.config'

const ActorPage: NextPage = () => {
	const { actorId } = useRouter().query

	const { data, isLoading } = useQuery(
		['Details Actor ', actorId],
		() => ActorServices.getDetailsAboutActor(Number(actorId)),
		{
			enabled: !!actorId,
		}
	)

	const { data: movies } = useQuery(
		['Known for ', actorId],
		() => MovieService.getMoviesByActorId(Number(actorId)),
		{
			enabled: !!actorId,
			select: (data) => {
				return data.map((movie: IMovieItem) => ({
					id: movie.id,
					title: movie.title,
					posterPath: movie.poster_path,
					url: getMovieUrl(movie.id),
				}))
			},
		}
	)

	return (
		data && (
			<>
				<section className="flex">
					<div>
						<div className="rounded-md overflow-hidden w-60 h-80 relative mb-5">
							<Image
								alt="name"
								src={getPosterImage(data.profile_path)}
								className="image-like-bg"
								layout="fill"
							></Image>
						</div>
						<h3 className="text-white text-2xl mb-10 text-center font-bold">
							{data.name}
						</h3>
						<div className="mt-10">
							<p className="text-white mb-4">
								<strong className="block">
									<bdi>Date of Birth</bdi>
								</strong>
								{data.birthday || 'unknown'}
							</p>

							{data.deathday && (
								<p className="text-white mb-4">
									<strong className="block">
										<bdi>Day of Death</bdi>
									</strong>
									{data.deathday}
								</p>
							)}

							<p className="text-white mb-4">
								<strong className="block">
									<bdi>Place of Birth</bdi>
								</strong>
								{data.place_of_birth || 'unknown'}
							</p>

							{data.also_known_as.length > 0 && (
								<>
									<p className="text-white mb-1">
										<strong className="block">
											<bdi>Also Known As</bdi>
										</strong>
									</p>
									<ul className="list-disc ml-4">
										{data.also_known_as.map((item: string[], index: number) => (
											<li key={index} className="text-white">
												{item}
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					</div>

					<div className="ml-6 overflow-hidden">
						{data.biography ? (
							<>
								<SubHeading title="Biography" />

								<p className="text-white mb-3">{data.biography}</p>
							</>
						) : (
							<div className="m-20">
								<div className="p-10 bg-gray-800 rounded-lg outline outline-1 outline-gray-700">
									<p className="text-primary mb-3 text-center">{`Sorry, we do not have information about ${data.name}`}</p>
								</div>
							</div>
						)}

						<SubHeading title="Known For" />
						<Gallery items={movies} />
					</div>
				</section>
			</>
		)
	)
}

export default ActorPage
