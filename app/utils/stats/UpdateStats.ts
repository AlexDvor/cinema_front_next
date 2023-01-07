import axios, { AxiosError } from 'axios'

import { StatsService } from '@/services/stats/stats.service'

const USER_KEY = process.env.USER_KEY
const NAME_LS = 'userKey'

export const UpdateStats = async () => {
	try {
		if (typeof localStorage !== 'undefined') {
			const key = localStorage.getItem(NAME_LS)
			if (key === USER_KEY) return
			else {
				await StatsService.addStatic()
				localStorage.setItem(NAME_LS, USER_KEY || '')
			}
		}
	} catch (er) {
		const error = er as AxiosError
		if (error.code === 'ERR_NETWORK') {
			console.log('We have some problem with Our Server. Sorry!!!')
		}
	}
}
