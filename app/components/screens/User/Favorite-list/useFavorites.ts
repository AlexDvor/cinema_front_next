import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user/user.service'

export const useFavoritesList = () => {
	const { user } = useAuth()

	const {
		isLoading,
		data: favoritesList,
		refetch,
	} = useQuery('Favorite List', () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user,
	})

	return { isLoading, favoritesList, refetch }
}
