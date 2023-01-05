import { TUrl } from '@/interfaces/favorites.types'

import { getActorUrl, getMovieUrl, getTvUrl } from '@/configs/url.config'

export const getUrlByType = (type: TUrl, id: number | string) => {
	switch (type) {
		case 'movie':
			return getMovieUrl(id)

		case 'actor':
			return getActorUrl(id)

		case 'tv':
			return getTvUrl(id)

		default:
			console.log('Invalid subscription type')
	}
}
