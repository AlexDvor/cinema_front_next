import Profile from '@/components/screens/User/Profile-section/Profile'

import { NextPageAuth } from '@/interfaces/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
