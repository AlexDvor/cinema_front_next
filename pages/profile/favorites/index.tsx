import Favorites from '@/components/screens/User/Favorites-section/Favorites'

import { NextPageAuth } from '@/interfaces/auth.types'
import { IUserFavoriteItem } from '@/interfaces/user-favorite-item.types'

import { user } from '@/store/user'

const FavoritesPage: NextPageAuth = () => {
	const movies = user.favorite.movies.map(
		(item): IUserFavoriteItem => ({
			id: item.id,
			title: 'Movies',
			poster: item.backdrop_path,
			link: '/profile/favorites/movies',
		})
	)
	const actors = user.favorite.actors.map(
		(item): IUserFavoriteItem => ({
			id: item.id,
			title: 'Actors',
			poster: item.profile_path,
			link: '/profile/favorites/actors',
		})
	)
	return (
		<>
			<Favorites movie={movies[0]} actor={actors[0]} />
		</>
	)
}
FavoritesPage.isOnlyUser = true

export default FavoritesPage
