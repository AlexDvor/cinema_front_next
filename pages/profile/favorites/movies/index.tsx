import FavoriteList from '@/components/screens/User/Favorite-list/FavoriteList'

import { NextPageAuth } from '@/interfaces/auth.types'

import { getMovieUrl, getOriginalBackdrop } from '@/configs/url.config'

import { user } from '@/store/user.test.'

const FavoriteMovies: NextPageAuth = () => {
	const movies = user.favorite.movies.map((item) => ({
		id: item.id,
		title: item.title,
		url: getMovieUrl(item.id),
		posterPath: getOriginalBackdrop(item.backdrop_path),
	}))
	return (
		<>
			<FavoriteList title={'Favorites movies'} data={movies || []} />
		</>
	)
}
FavoriteMovies.isOnlyUser = true

export default FavoriteMovies
