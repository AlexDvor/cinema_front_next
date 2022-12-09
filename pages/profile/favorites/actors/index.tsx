import FavoriteList from '@/components/screens/User/Favorite-list/FavoriteList'

import { NextPageAuth } from '@/interfaces/auth.types'

import { user } from '@/store/user'

const FavoritesActors: NextPageAuth = () => {
	const actorsData = user.favorite.actors
	return (
		<>
			<FavoriteList title={'Favorites actors'} movies={[]} />
		</>
	)
}
FavoritesActors.isOnlyUser = true

export default FavoritesActors
