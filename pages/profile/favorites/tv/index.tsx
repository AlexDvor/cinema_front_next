import FavoriteList from '@/components/screens/User/Favorite-list/FavoriteList'
import { useFavoritesList } from '@/components/screens/User/Favorite-list/useFavorites'

import { NextPageAuth } from '@/interfaces/auth.types'

import { getMovieUrl, getPosterImage, getTvUrl } from '@/configs/url.config'

const FavoriteTv: NextPageAuth = () => {
	const { favoritesList, refetch, isLoading } = useFavoritesList()

	const tv = favoritesList?.tv.map((item) => ({
		id: item.id,
		title: item.name,
		url: getTvUrl(item.id),
		posterPath: getPosterImage(item.poster_path),
	}))
	return (
		<>
			<FavoriteList title={'Favorite Tv'} data={tv || []} />
		</>
	)
}
FavoriteTv.isOnlyUser = true

export default FavoriteTv
