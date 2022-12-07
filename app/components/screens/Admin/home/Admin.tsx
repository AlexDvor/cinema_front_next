import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'

import { Meta } from '@/utils/meta'

import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />

			<Statistics />
		</Meta>
	)
}

export default Admin
