import axios from 'api/interceptors'

import { IResponseFavoriteItems } from '@/interfaces/favorites.types'
import { IResponseUser, IUser } from '@/interfaces/user.types'

import { getUsersUrl } from '@/configs/api.config'

export const UserService = {
	async getFavorites() {
		const response = await axios.get<IResponseFavoriteItems>(
			getUsersUrl('/profile/favorites')
		)
		return response.data
	},

	async getProfile() {
		const response = await axios.get<IResponseUser>(getUsersUrl('/profile'))
		return response
	},
	async getCurrentUser() {
		const response = await axios.get<IResponseUser>(getUsersUrl('/profile'))
		return response
	},
}
