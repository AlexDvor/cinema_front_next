import axios from 'api/interceptors'

import { IProfileInput } from '@/components/screens/User/Profile-section/profile.interface'

import { IResponseFavoriteItems } from '@/interfaces/favorites.types'

import { getUsersUrl } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

export type TArticle = 'movies' | 'actors' | 'tv'

const TOGGLE_FAVORITE_MOVIES_URL = `${getUsersUrl(
	'/profile/favorite/movies/toggle'
)}`
const TOGGLE_FAVORITE_ACTOR_URL = `${getUsersUrl(
	'/profile/favorite/actor/toggle'
)}`
const TOGGLE_FAVORITE_TV_URL = `${getUsersUrl('/profile/favorite/tv/toggle')}`

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

	async toggleFavoriteList(article: {}, typeArticle: TArticle) {
		if (typeArticle === 'movies') {
			return axios.post<IResponseFavoriteItems>(TOGGLE_FAVORITE_MOVIES_URL, {
				movie: article,
			})
		}
		if (typeArticle === 'actors') {
			return axios.post<IResponseFavoriteItems>(TOGGLE_FAVORITE_ACTOR_URL, {
				actor: article,
			})
		}
		if (typeArticle === 'tv') {
			return axios.post<IResponseFavoriteItems>(TOGGLE_FAVORITE_TV_URL, {
				tv: article,
			})
		}
	},

	async updateProfile(data: IProfileInput) {
		return await axios.post(getUsersUrl('/profile/update'), data)
	},
}
