import { getGenreUrl } from '@/configs/url.config'

import { IMenu } from './Menu.types'

const genresId = {
	comedy: 35,
	adventure: 12,
	animation: 16,
	fantasy: 14,
}

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
}

const genresMenu: IMenu = {
	title: 'Popular Genres',
	items: [
		{
			icon: 'MdOutlineMood',
			link: getGenreUrl(genresId.comedy),
			title: 'Comedy',
		},
		{
			icon: 'MdTravelExplore',
			link: getGenreUrl(genresId.adventure),
			title: 'Adventure',
		},
		{
			icon: 'MdAnimation',
			link: getGenreUrl(genresId.animation),
			title: 'Animation',
		},
		{
			icon: 'MdOutlineCelebration',
			link: getGenreUrl(genresId.fantasy),
			title: 'Fantasy',
		},
	],
}

const userMenu: IMenu = {
	title: 'General',
	items: [],
}

export const menus: IMenu[] = [firstMenu, genresMenu, userMenu]
