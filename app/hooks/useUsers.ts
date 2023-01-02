import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/Admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { IUser } from '@/interfaces/user.types'

import { AdminService } from '@/services/admin/admin.service'
import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { convertMongoDate } from '@/utils/date/convertMongoDate'

import { getAdminUrl } from '@/configs/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => AdminService.getUsers(),
		{
			select: ({ data }) =>
				data.data.map(
					(user): ITableItem => ({
						_id: user._id,
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				),
			onError(error) {
				toastError(error, 'user list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => AdminService.removeUserById(userId),
		{
			onError(error) {
				toastError(error, 'Delete user')
			},
			onSuccess() {
				toastr.success('Delete user', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
