import Admin from '@/screens/admin/home/Admin'

import { NextPageAuth } from '@/interfaces/auth.types'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
