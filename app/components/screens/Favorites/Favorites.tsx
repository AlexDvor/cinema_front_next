import { FC } from 'react'

// import SkeletonLoader from '@/components/ui/Skeleton-loader/SkeletonLoader'
// import Heading from '@/components/ui/heading/Heading'
// import { Meta } from '@/utils/meta'
// import { getMovieUrl } from '@/configs/url.config'
// import FavoriteItem from './FavoriteItem'
// import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { favoritesMovies, isLoading } = useFavorites()

	return (
		<>
			<h3 className="text-yellow-700">Favorites</h3>
		</>
	)

	// return (
	// <Meta title="Favorites">
	// <Heading title={'Favorites'} />
	// <section className={styles.favorites}>
	// 	{isLoading ? (
	// 		<SkeletonLoader
	// 			count={3}
	// 			className={styles.skeletonLoader}
	// 			containerClassName={styles.containerLoader}
	// 		/>
	// 	) : (
	// 		favoritesMovies?.map((movie: IMovieItem) => (
	// 			<FavoriteItem
	// 				key={movie._id}
	// 				item={{
	// 					name: movie.title,
	// 					posterPath: movie.bigPoster,
	// 					url: getMovieUrl(movie.slug),
	// 					title: movie.title,
	// 					_id: movie._id,
	// 				}}
	// 			/>
	// 		))
	// 	)}
	// </section>
	//</Meta>
	// )
}

export default Favorites
