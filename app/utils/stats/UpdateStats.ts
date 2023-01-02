import { StatsService } from '@/services/stats/stats.service'

const USER_KEY = process.env.USER_KEY
const NAME_LS = 'userKey'

export const UpdateStats = async () => {
	if (typeof localStorage !== 'undefined') {
		const key = localStorage.getItem(NAME_LS)
		if (key === USER_KEY) return
		else {
			await StatsService.addStatic()
			localStorage.setItem(NAME_LS, USER_KEY || '')
		}
	}
}
