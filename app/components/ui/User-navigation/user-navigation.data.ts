import { IUserNavItem } from '@/interfaces/user-navigation.types'

import { getUserFavoriteListUrl, getUserUrl } from '@/configs/url.config'

export const navItems: IUserNavItem[] = [
	{
		title: 'Profile',
		link: getUserUrl(),
	},
	{
		title: 'Favorites',
		link: getUserFavoriteListUrl(),
	},
]
