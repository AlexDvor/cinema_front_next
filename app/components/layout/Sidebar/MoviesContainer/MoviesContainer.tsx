import { FC } from 'react'

import PopularMovieList from './PopularMoviesList/PopularMovieList'

// import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			{/* <FavoriteMovieList /> */}
		</div>
	)
}

export default MoviesContainer
