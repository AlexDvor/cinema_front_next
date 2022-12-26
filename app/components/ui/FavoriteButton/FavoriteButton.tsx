import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { TArticle, UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { debounceClick } from '@/utils/debounce/debounceClick'

import { useFavoritesList } from '../../screens/User/Favorite-list/useFavorites'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

interface IFavoriteButton {
	article: { id: number; title?: string; name?: string }
	typeArticle: TArticle
}

const FavoriteButton: FC<IFavoriteButton> = ({ article, typeArticle }) => {
	const [isFavoriteItem, setIsFavoriteItem] = useState(false)
	const { favoritesList, refetch } = useFavoritesList()
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
				`The button has been disabled. Please decide what you want remove or add "${
					article.title || article.name
				}"`,
				{ timeOut: 10000 }
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count])

	useEffect(() => {
		const favoriteItemData = favoritesList ? favoritesList[typeArticle] : []
		if (favoriteItemData) {
			const isHasItem = favoriteItemData.some((item) => item.id === article.id)
			if (isFavoriteItem !== isHasItem) setIsFavoriteItem(isHasItem)
		}
	}, [article, favoritesList, isFavoriteItem, typeArticle])

	const { mutateAsync } = useMutation(
		'update favorite list',
		() => UserService.toggleFavoriteList(article, typeArticle),
		{
			onError(error) {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsFavoriteItem(!isFavoriteItem)
				refetch()
				if (!isFavoriteItem) {
					toastr.success(
						`${article.title || article.name} `,
						'Successfully added to the library'
					)
				} else {
					toastr.info(
						`${article.title || article.name}`,
						'Successfully removed'
					)
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
				[styles.movieButton]: typeArticle === 'movies',
				[styles.actorButton]: typeArticle === 'actors',
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteButton
