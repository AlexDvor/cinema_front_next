import { FC } from 'react'

import { IGenreProps } from '@/interfaces/genres.types'

import Catalog from '../Catolog-movies/Catalog'

const Genre: FC<IGenreProps> = ({ genre, movies }) => {
	return (
		<Catalog
			movies={movies}
			title={genre.name}
			description={genre.description}
		/>
	)
}

export default Genre
