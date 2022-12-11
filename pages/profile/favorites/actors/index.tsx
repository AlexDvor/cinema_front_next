import FavoriteList from '@/components/screens/User/Favorite-list/FavoriteList'

import { NextPageAuth } from '@/interfaces/auth.types'

import { getActorUrl, getPosterImage } from '@/configs/url.config'

import { user } from '@/store/user'

const FavoritesActors: NextPageAuth = () => {
	const actors = user.favorite.actors.map((item) => ({
		id: item.id,
		title: item.name,
		url: getActorUrl(item.id),
		posterPath: getPosterImage(item.profile_path),
	}))
	return (
		<>
			<FavoriteList title={'Favorites actors'} data={actors || []} />
		</>
	)
}
FavoritesActors.isOnlyUser = true

export default FavoritesActors
