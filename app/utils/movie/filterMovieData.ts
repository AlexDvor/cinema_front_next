import { IMovie } from '@/interfaces/movie.types'

export const filterMovieData = (data: IMovie[]) => {
	return data.filter((item) => item.backdrop_path !== null)
}
