import FavoriteList from '@/components/screens/User/Favorite-list/FavoriteList'
import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'

import { NextPageAuth } from '@/interfaces/auth.types'

import { getActorUrl, getPosterImage } from '@/configs/url.config'

const FavoritesActors: NextPageAuth = () => {
	const { favoritesList } = useFavoritesList()

	const actors = favoritesList?.actors.map((item) => ({
		id: item.id,
		title: item.name,
		url: getActorUrl(item.id),
		posterPath: getPosterImage(item.profile_path),
	}))
	return (
		<>
			<FavoriteList title={'Favorite Actors'} data={actors || []} />
		</>
	)
}
FavoritesActors.isOnlyUser = true

export default FavoritesActors
