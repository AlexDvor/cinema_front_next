import FavoriteList from '@/components/screens/User/Favorite-list/FavoriteList'
import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'

import { NextPageAuth } from '@/interfaces/auth.types'

import { getMovieUrl, getPosterImage } from '@/configs/url.config'

const FavoriteMovies: NextPageAuth = () => {
	const { favoritesList, refetch, isLoading } = useFavoritesList()

	const movies = favoritesList?.movies.map((item) => ({
		id: item.id,
		title: item.title,
		url: getMovieUrl(item.id),
		posterPath: getPosterImage(item.poster_path),
	}))
	return (
		<>
			<FavoriteList title={'Favorites movies'} data={movies || []} />
		</>
	)
}
FavoriteMovies.isOnlyUser = true

export default FavoriteMovies
