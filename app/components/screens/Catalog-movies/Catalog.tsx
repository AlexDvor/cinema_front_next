import cn from 'classnames'
import { FC, useEffect, useState } from 'react'

import GalleryItem from '@/components/ui/Gallery/GalleryItem'
import Description from '@/components/ui/Heading/Description'
import Heading from '@/components/ui/Heading/Heading'

import { ICatalog } from '@/interfaces/catalog.types'

import { fetchDataByType } from '@/utils/fetch/fetchDataByType'
import { Meta } from '@/utils/meta'

import { getMovieUrl } from '@/configs/url.config'

import styles from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({
	title,
	description,
	movies,
	fetchName = null,
	genreId = undefined,
	hasPagination = true,
	variant = 'horizontal',
	typePoster = 'backdrop_path',
}) => {
	const [data, setData] = useState(movies)
	const [pageNumber, setPageNumber] = useState(1)
	const MAX_PAGE = 15

	useEffect(() => {
		setData(movies)
	}, [movies])

	useEffect(() => {
		if (pageNumber === 1 || pageNumber >= MAX_PAGE) return
		if (!fetchName) return

		const fetchData = async () => {
			const data = await fetchDataByType(
				fetchName,
				pageNumber,
				'en-US',
				genreId
			)
			setData((prevState) => [...prevState, ...data])
		}

		fetchData()
	}, [fetchName, genreId, pageNumber])

	const onClickButton = () => {
		setPageNumber(pageNumber + 1)
	}

	return (
		<>
			<Meta title={title} description={description}>
				<Heading title={title} className={styles.heading} />
				{description && (
					<Description text={description} className={styles.description} />
				)}
				<section className={styles.movies}>
					{data.map((movie) => (
						<GalleryItem
							key={movie.id}
							variant={variant}
							item={{
								id: movie.id,
								title: movie.title,
								posterPath: `${movie[typePoster]}`,
								url: getMovieUrl(movie.id),
							}}
						/>
					))}
				</section>
				<div className="text-center">
					<button
						className={cn(styles.button, {
							[styles.hidden]: !hasPagination,
						})}
						onClick={onClickButton}
					>
						Load more
					</button>
				</div>
			</Meta>
		</>
	)
}

export default Catalog
