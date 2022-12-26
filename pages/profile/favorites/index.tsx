import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'
import Favorites from '@/components/screens/User/Favorites-section/Favorites'

import { NextPageAuth } from '@/interfaces/auth.types'

const FavoritesPage: NextPageAuth = () => {
	const { favoritesList } = useFavoritesList()

	const movies = favoritesList?.movies.map((item) => ({
		id: item.id,
		title: 'Movies',
		poster: item.backdrop_path,
		link: '/profile/favorites/movies',
	}))
	const actors = favoritesList?.actors.map((item) => ({
		id: item.id,
		title: 'Actors',
		poster: item.profile_path,
		link: '/profile/favorites/actors',
	}))

	return (
		<>
			{favoritesList && (
				<Favorites movie={movies && movies[0]} actor={actors && actors[0]} />
			)}
		</>
	)
}
FavoritesPage.isOnlyUser = true

export default FavoritesPage
