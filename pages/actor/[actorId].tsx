import { NextPage } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Gallery from '@/components/ui/Gallery/Gallery'
import Heading from '@/components/ui/Heading/Heading'
import SubHeading from '@/components/ui/Heading/SubHeading'

import { TImageActor } from '@/interfaces/actor.types'

import { ActorServices } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getMovieUrl, getPosterImage } from '@/configs/url.config'

import styles from './actor.module.scss'

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
				<section className={styles.section}>
					<div>
						<div className="rounded-md overflow-hidden w-60 h-80 relative">
							<Image
								alt="name"
								src={getPosterImage(data.profile_path)}
								className="image-like-bg"
								layout="fill"
							></Image>
						</div>

						<div className=" mt-10">
							<p className="text-white mb-4">
								<strong className="block">
									<bdi>Date of Birth</bdi>
								</strong>
								{data.birthday}
							</p>

							{data.deathday && (
								<p className="text-white mb-4">
									<strong className="block">
										<bdi>Day of Death</bdi>
									</strong>
									{data.birthday}
								</p>
							)}

							<p className="text-white mb-4">
								<strong className="block">
									<bdi>Place of Birth</bdi>
								</strong>
								{data.place_of_birth}
							</p>

							<p className="text-white mb-1">
								<strong className="block">
									<bdi>Also Known As</bdi>
								</strong>
							</p>
							{data.also_known_as && (
								<ul className="list-disc ml-5">
									{data.also_known_as.map((item: string[], index: number) => (
										<li key={index} className="text-white">
											{item}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>

					<div className="p-8">
						<h3 className="text-white text-3xl mb-10">{data.name}</h3>
						<h3 className="text-white font-bold text-2xl mb-5 ">Biography</h3>
						<p className="text-white">{data.biography}</p>

						<SubHeading title="Known For" />
					</div>
				</section>
				{/* <div>
					<Gallery items={movies} />
				</div> */}
			</>
		)
	)

	// return (
	// 	data && (
	// 		<section className="flex">
	// 			<div className="w-400 relative">
	// 				<Image
	// 					alt="name"
	// 					src={getPosterImage(data.profile_path)}
	// 					layout="fill"
	// 					className="image-like-bg"
	// 				></Image>
	// 			</div>

	// 			<div className="ml-10">
	// 				<h3 className="text-white text-3xl mb-10">{data.name}</h3>
	// 				<h3 className="text-white font-bold text-2xl mb-5 ">Biography</h3>
	// 				<p className="text-white">{data.biography}</p>
	// 				{/* <p className="text-white">Date of Birth: {data.birthday}</p>
	// 					<p className="text-white">Place of Birth: {data.place_of_birth}</p> */}
	// 			</div>

	// 			{/* <ul className="grid grid-cols-4 gap-4">
	// 				{data.images.profiles
	// 					.slice(1)
	// 					.map((item: TImageActor, index: number) => (
	// 						<li key={index} className="">
	// 							<Image
	// 								src={getPosterImage(item.file_path)}
	// 								alt="name"
	// 								width={150}
	// 								height={200}
	// 							></Image>
	// 						</li>
	// 					))}
	// 			</ul> */}

	// 			{/* <div>
	// 				<Gallery items={movies} />
	// 			</div> */}
	// 		</section>
	// 	)
	// )
}

export default ActorPage
