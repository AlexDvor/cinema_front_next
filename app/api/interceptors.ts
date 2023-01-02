import axios from 'axios'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { toastr } from 'react-redux-toastr'

import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { SERVER_API } from '@/configs/api.config'

import { errorCatch } from './api.helpers'

const BASE_URL_MOVIE = 'https://api.themoviedb.org/3'
const instance = axios.create({
	baseURL: SERVER_API,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'Unauthorized! Access Token was expired!' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			toastr.error('Update', 'You Get New Token')
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (e) {
				if (
					errorCatch(error) ===
						'Refresh token was expired. Please make a new signin request' ||
					errorCatch(error) === 'Refresh token is not in database!'
				) {
					console.log('Remove Token from Cookies')
					removeTokensStorage()
					Router.push('/')
				}
			}
		}

		throw error
	}
)

export default instance

export const axiosClassicMovies = axios.create({
	baseURL: BASE_URL_MOVIE,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const axiosClassicStats = axios.create({
	baseURL: SERVER_API,
	headers: {
		'Content-Type': 'application/json',
	},
})

// import axios from 'axios'
// import Cookies from 'js-cookie'
// // import Router from 'next/router'
// import { toastr } from 'react-redux-toastr'

// import { removeTokensStorage } from '@/services/auth/auth.helper'
// import { AuthService } from '@/services/auth/auth.service'

// import { SERVER_API } from '@/configs/api.config'

// import { errorCatch } from './api.helpers'

// const BASE_URL_MOVIE = 'https://api.themoviedb.org/3'
// // const { push } = Router

// const instance = axios.create({
// 	baseURL: SERVER_API,
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// })

// instance.interceptors.request.use((config) => {
// 	const accessToken = Cookies.get('accessToken')

// 	if (config.headers && accessToken)
// 		config.headers.Authorization = `Bearer ${accessToken}`

// 	return config
// })

// instance.interceptors.response.use(
// 	(config) => config,
// 	async (error) => {
// 		const originalRequest = error.config

// 		if (
// 			(error.response?.status === 401 ||
// 				errorCatch(error) === 'jwt expired' ||
// 				errorCatch(error) === 'Unauthorized! Access Token was expired!' ||
// 				errorCatch(error) === 'jwt must be provided') &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			toastr.error('Update', 'You Get New Token')
// 			originalRequest._isRetry = true

// 			try {
// 				await AuthService.getNewTokens()
// 				return instance.request(originalRequest)
// 			} catch (error) {
// 				console.log('🚀 - error', error)
// 				if (
// 					errorCatch(error) ===
// 						'Refresh token was expired. Please make a new signin request' ||
// 					errorCatch(error) === 'Refresh token is not in database!' ||
// 					errorCatch(error) === 'jwt expired'
// 				) {
// 					console.log('Delete tokens from local store')
// 					// push('/auth')
// 					toastr.error(
// 						'Logout',
// 						'Your authorizaiton is finished, please sign in again'
// 					)
// 					removeTokensStorage()
// 				}
// 			}
// 		}

// 		throw error
// 	}
// )

// export default instance

// export const axiosClassicMovies = axios.create({
// 	baseURL: BASE_URL_MOVIE,
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// })
