import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IMovieDescriptionItem } from '@/interfaces/movie.types'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { debounceClick } from '@/utils/debounce/debounceClick'

import { useFavoritesMovies } from '../../User/Favorite-list/useFavorites'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

const FavoriteButton: FC<{ movie: IMovieDescriptionItem }> = ({ movie }) => {
	const [isFavoriteItem, setIsFavoriteItem] = useState(false)
	const { favoritesMovies, refetch } = useFavoritesMovies()
	const [count, setCount] = useState(0)
	const [isBlockedButton, setBlockedButton] = useState(false)

	const handleClick = debounceClick(() => {
		setCount(count + 1)
		mutateAsync()
	}, 250)

	useEffect(() => {
		if (count >= 10) {
			setBlockedButton(true)
			toastr.info(
				'Attention !!!',
				`The button has been disabled. Please decide what you want remove or add "${movie.title}"`,
				{ timeOut: 10000 }
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count])

	useEffect(() => {
		if (favoritesMovies) {
			const isHasMovie = favoritesMovies.some((item) => item.id === movie.id)
			if (isFavoriteItem !== isHasMovie) setIsFavoriteItem(isHasMovie)
		}
	}, [favoritesMovies, isFavoriteItem, movie])

	const { mutateAsync } = useMutation(
		'update actor',
		() => UserService.toggleFavoriteMovies(movie),
		{
			onError(error) {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsFavoriteItem(!isFavoriteItem)
				refetch()
				if (!isFavoriteItem) {
					toastr.success(`${movie.title}`, 'Successfully added to the library')
				} else {
					toastr.info(`${movie.title}`, 'Successfully removed')
				}
			},
		}
	)

	return (
		<button
			disabled={isBlockedButton}
			onClick={handleClick}
			className={cn(styles.button, {
				[styles.animate]: isFavoriteItem,
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteButton
