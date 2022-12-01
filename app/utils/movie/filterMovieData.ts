import { IMovieItem } from '@/interfaces/movie.types'

export const filterMovieData = (data: IMovieItem[]) => {
	return data.filter(
		(item) => item.backdrop_path !== null || item.poster_path !== null
	)
}
