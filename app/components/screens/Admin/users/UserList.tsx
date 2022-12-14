import { ChangeEvent, FC, useState } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'

import { Meta } from '@/utils/meta'

import { staticData } from '@/store/user.test.'

import { useUsers } from '../../../../hooks/useUsers'

const UserList: FC = () => {
	// const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={staticData.users || []}
				headerItems={['Email', 'Date register']}
				isLoading={true}
				removeHandler={() => 'Remove User'}
			/>
		</Meta>
	)
}

export default UserList
