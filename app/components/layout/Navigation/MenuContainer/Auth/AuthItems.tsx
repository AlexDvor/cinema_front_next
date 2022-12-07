import { FC } from 'react'

// import { useAuth } from '@/hooks/useAuth'
import { getAdminHomeUrl } from '@/configs/url.config'

import { user } from '@/store/user'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	// const { user } = useAuth()

	const testUser = user

	return (
		<>
			{testUser.isAuthUser ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{testUser?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
