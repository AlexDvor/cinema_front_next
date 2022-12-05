import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/Menu.types'

import { IMovieItem } from '@/interfaces/movie.types'

import { MovieService } from '@/services/movie.service'

export const getPopularList = async () => {
	try {
		const { results } = await MovieService.getPopularMovies()
		const moviesId = results.slice(0, 3).map((item: IMovieItem) => item.id)

		const popularMovies = await Promise.all(
			moviesId.map(async (item: number[]) => {
				const id = item
				return await MovieService.getMovieByID(id.toString()).then((item) => {
					return {
						...item,
					}
				})
			})
		)

		return popularMovies
	} catch (error) {
		return []
	}
}
