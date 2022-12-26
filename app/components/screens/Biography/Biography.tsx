import Image from 'next/legacy/image'
import { FC } from 'react'

import FavoriteButton from '@/components/ui/FavoriteButton/FavoriteButton'
import Gallery from '@/components/ui/Gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IDetailsAboutActor } from '@/interfaces/actor.types'
import { IGalleryItem } from '@/interfaces/gallery.types'

import { getPosterImage } from '@/configs/url.config'

interface Biography {
	actor: IDetailsAboutActor
	knowForMovies: IGalleryItem[]
}

const Biography: FC<Biography> = ({ actor, knowForMovies }) => {
	return (
		<>
			<section className="flex">
				<div>
					<div className="rounded-md overflow-hidden w-60 h-80 relative mb-5">
						<Image
							alt="name"
							src={getPosterImage(actor.profile_path)}
							className="image-like-bg"
							layout="fill"
							priority
						></Image>

						<FavoriteButton
							article={{ id: actor.id, name: actor.name }}
							typeArticle="actors"
						/>
					</div>
					<h3 className="text-white text-2xl mb-10 text-center font-bold">
						{actor.name}
					</h3>
					<div className="mt-10">
						<p className="text-white mb-4">
							<strong className="block">
								<bdi>Date of Birth</bdi>
							</strong>
							{actor.birthday || 'unknown'}
						</p>

						{actor.deathday && (
							<p className="text-white mb-4">
								<strong className="block">
									<bdi>Day of Death</bdi>
								</strong>
								{actor.deathday}
							</p>
						)}

						<p className="text-white mb-4">
							<strong className="block">
								<bdi>Place of Birth</bdi>
							</strong>
							{actor.place_of_birth || 'unknown'}
						</p>

						{actor.also_known_as.length > 0 && (
							<>
								<p className="text-white mb-1">
									<strong className="block">
										<bdi>Also Known As</bdi>
									</strong>
								</p>
								<ul className="list-disc ml-4">
									{actor.also_known_as.map((item, index) => (
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
					{actor.biography ? (
						<>
							<SubHeading title="Biography" />

							<p className="text-white mb-3">{actor.biography}</p>
						</>
					) : (
						<div className="m-20">
							<div className="p-10 bg-gray-800 rounded-lg outline outline-1 outline-gray-700">
								<p className="text-primary mb-3 text-center">{`Sorry, we do not have information about ${data.name}`}</p>
							</div>
						</div>
					)}

					<SubHeading title="Known For" />
					<Gallery items={knowForMovies} />
				</div>
			</section>
		</>
	)
}

export default Biography
