import { NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/Gallery/Gallery'
import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'
import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { TImageActor } from '@/interfaces/actor.types'

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
		['111111 ', actorId],
		() => MovieService.getMoviesByActorId(Number(actorId)),
		{
			enabled: !!actorId,
			select: (data) => {
				return data.slice(0, 19).map((movie) => ({
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
						<div className="rounded-md overflow-hidden w-60 h-80 relative">
							<Image
								alt="name"
								src={getPosterImage(data.profile_path)}
								className="image-like-bg"
								layout="fill"
							></Image>
						</div>

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
						<h3 className="text-white text-3xl mb-10">{data.name}</h3>

						{data.biography ? (
							<>
								<h3 className="text-white font-bold text-2xl mb-5 ">
									Biography
								</h3>
								<p className="text-white mb-3">{data.biography}</p>
							</>
						) : (
							<div className="p-20">
								<p className="text-primary mb-3">{`Sorry, we do not have information about ${data.name}`}</p>
							</div>
						)}
					</div>
				</section>
				<section>
					<SubHeading title="Known For" />
					<Gallery items={movies} />
				</section>
			</>
		)
	)
}

export default ActorPage
