import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovieList from './PopularMoviesList/PopularMovieList'

const FavoriteMovieList = dynamic(
	() => import('./FavoriteMovieList/FavoriteMovieList'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			<FavoriteMovieList />
		</div>
	)
}

export default MoviesContainer
