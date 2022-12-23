import { getContentType } from 'api/api.helpers'
import axios from 'api/interceptors'
import Cookies from 'js-cookie'
import Router from 'next/router'

import { SERVER_API, getAuthUrl } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'

const { push } = Router

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${SERVER_API}${getAuthUrl('/register')}`,
			{
				email,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${SERVER_API}${getAuthUrl('/login')}`,
			{
				email,
				password,
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},

	async logout() {
		// await axios.get(`${SERVER_API}${getAuthUrl('/logout')}`)
		removeTokensStorage()
		localStorage.removeItem('user')
		push('/')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			`${SERVER_API}${getAuthUrl('/refresh-token')}`,
			{
				refreshToken,
			},
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
