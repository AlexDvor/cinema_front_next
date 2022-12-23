import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user/user.service'

export const useFavoritesMovies = () => {
	const { user } = useAuth()

	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data.movies,
		enabled: !!user,
	})

	return { isLoading, favoritesMovies, refetch }
}
