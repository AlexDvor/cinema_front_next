import { FC } from 'react'

import GalleryItem from '@/components/ui/Gallery/GalleryItem'
import Description from '@/components/ui/Heading/Description'
import Heading from '@/components/ui/Heading/Heading'

import { ICatalog } from '@/interfaces/catalog.types'

// import Description from '@/components/ui/heading/Description'
// import Heading from '@/components/ui/heading/Heading'
// import { Meta } from '@/utils/meta'
// import { getMovieUrl } from '@/configs/url.config'
import styles from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({
	title = 'test title',
	description = 'test description',
	movies,
}) => {
	return (
		<>
			<Heading title={title} className={styles.heading} />
			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie.id}
						variant="horizontal"
						item={{
							id: movie.id,
							title: movie.title,
							posterPath: movie.backdrop_path,
							content: {
								title: movie.title,
							},
						}}
					/>
				))}
			</section>
		</>
	)

	//////

	// return (
	// 	<Meta title={title} description={description}>
	// 		<Heading title={title} className={styles.heading} />
	// 		{description && (
	// 			<Description text={description} className={styles.description} />
	// 		)}

	// 		<section className={styles.movies}>
	// 			{movies.map((movie) => (
	// 				<GalleryItem
	// 					key={movie._id}
	// 					variant="horizontal"
	// 					item={{
	// 						name: movie.title,
	// 						posterPath: movie.bigPoster,
	// 						url: getMovieUrl(movie.slug),
	// 						content: {
	// 							title: movie.title,
	// 						},
	// 					}}
	// 				/>
	// 			))}
	// 		</section>

	// 		{/* <div className="text-center">
	// 			<button className={styles.button}>Load more</button>
	// 		</div> */}
	// 	</Meta>
	// )
	//////
}

export default Catalog
