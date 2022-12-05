import { IMovieItem } from '@/interfaces/movie.types'
import { ITvItem } from '@/interfaces/tv.types'

export const filterMovieData = (data: IMovieItem[]) => {
	return data.filter(
		(item) => item.backdrop_path !== null || item.poster_path !== null
	)
}
