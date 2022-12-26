import { FC } from 'react'

import UserFavoriteItem from '@/components/ui/user-favorite-item/UserFavoriteItem'
import UserNavigation from '@/components/ui/user-navigation/UserNavigation'

import { IUserFavoriteItem } from '@/interfaces/user-favorite-item.types'

import { Meta } from '@/utils/meta'

interface IFavoriteList {
	movie: IUserFavoriteItem | undefined
	actor: IUserFavoriteItem | undefined
}

const Favorites: FC<IFavoriteList> = ({ movie, actor }) => {
	return (
		<>
			<Meta title="Favorite List">
				<UserNavigation />
				<div>
					{movie && <UserFavoriteItem item={movie}></UserFavoriteItem>}
					{actor && <UserFavoriteItem item={actor}></UserFavoriteItem>}
				</div>
			</Meta>
		</>
	)
}

export default Favorites
