import axios from 'api/interceptors'

import { IFetchFavoriteItems } from '@/interfaces/favorites.types'

import { getUsersUrl } from '@/configs/api.config'

export const UserService = {
	async getFavorites() {
		return axios.get<IFetchFavoriteItems>(getUsersUrl('/profile/favorites'))
	},
}
