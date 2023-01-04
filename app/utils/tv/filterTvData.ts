import { ITvItem } from '@/interfaces/tv.types'

export const filterTvData = (data: ITvItem[]) => {
	return data.filter(
		(item) => item.poster_path !== null && item.backdrop_path !== null
	)
}
