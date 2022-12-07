import UserList from '@/components/screens/Admin/users/UserList'

import { NextPageAuth } from '@/interfaces/auth.types'

const UserListPage: NextPageAuth = () => {
	return <UserList />
}

UserListPage.isOnlyAdmin = true

export default UserListPage
