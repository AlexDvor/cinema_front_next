import axios from 'api/interceptors'

import { IResponseFavoriteItems } from '@/interfaces/favorites.types'
import { IMovieDescriptionItem } from '@/interfaces/movie.types'

import { getUsersUrl } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

const TOGGLE_FAVORITE_MOVIES_URL = `${getUsersUrl(
	'/profile/favorite/movies/toggle'
)}`

export const UserService = {
	async getFavorites() {
		const response = await axios.get<IResponseFavoriteItems>(
			getUsersUrl('/profile/favorites')
		)
		return response.data
	},

	async getProfile() {
		const response = await axios.get<IAuthResponse>(getUsersUrl('/profile'))
		return response
	},

	async toggleFavoriteMovies(movie: IMovieDescriptionItem) {
		return axios.post(TOGGLE_FAVORITE_MOVIES_URL, {
			movie,
		})
	},
}
