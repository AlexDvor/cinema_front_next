import { FC } from 'react'

import AdminNavigation from '@/components/ui/Admin-navigation/AdminNavigation'
import Heading from '@/components/ui/Heading/Heading'

import { Meta } from '@/utils/meta'

import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="App Statistics" />

			<Statistics />
		</Meta>
	)
}

export default Admin
