import { axiosClassicStats } from 'api/interceptors'

import { getAdminUrl } from '@/configs/api.config'

export const StatsService = {
	async addStatic() {
		return axiosClassicStats.get(getAdminUrl('/statistic/add'))
	},
}
