import { FC } from 'react'

import UserFavoriteItem from '@/components/ui/user-favorite-item/UserFavoriteItem'
import UserNavigation from '@/components/ui/user-navigation/UserNavigation'

import { IUserFavoriteItem } from '@/interfaces/user-favorite-item.types'

import { Meta } from '@/utils/meta'

interface IFavoriteList {
	movie: IUserFavoriteItem
	actor: IUserFavoriteItem
}

const Favorites: FC<IFavoriteList> = ({ movie, actor }) => {
	return (
		<>
			<Meta title="Favorite List">
				<UserNavigation />
				<div className="">
					<UserFavoriteItem item={movie}></UserFavoriteItem>
					<UserFavoriteItem item={actor}></UserFavoriteItem>
				</div>
			</Meta>
		</>
	)
}

export default Favorites
