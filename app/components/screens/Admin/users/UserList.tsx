import { ChangeEvent, FC, useState } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import AdminNavigation from '@/ui/Admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/Admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/Admin-table/AdminTable/AdminTable'

import { Meta } from '@/utils/meta'

import { useUsers } from '../../../../hooks/useUsers'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()
	console.log('🚀 - data', data)

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Email', 'Date register']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
