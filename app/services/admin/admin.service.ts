import axios from 'api/interceptors'

import { IUser } from '@/interfaces/user.types'

import { getAdminUrl } from '@/configs/api.config'

interface IResponseStatistic {
	code: number
	status: string
	data: {
		guests: number
		authUsers: number
	}
}

interface IResponseUsers extends Pick<IResponseStatistic, 'code' | 'status'> {
	data: IUser[]
}

export const AdminService = {
	async getStatistics() {
		return axios.get<IResponseStatistic>(getAdminUrl('/statistic/general'))
	},

	async getUsers() {
		return axios.get<IResponseUsers>(getAdminUrl('/users/all'))
	},

	async removeUserById(id: string) {
		console.log('service remove', id)
		return axios.delete(getAdminUrl(`/users/remove/${id}`))
	},
}
