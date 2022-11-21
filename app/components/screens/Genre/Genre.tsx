import { FC } from 'react'

import Catalog from '../Catolog-movies/Catalog'

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	return (
		<Catalog
			movies={movies}
			title={genre.name}
			description={genre.description}
		/>
	)
}

export default Genre
