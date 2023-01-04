import { FC } from 'react'

import UserFavoriteItem from '@/components/ui/User-favorite-item/UserFavoriteItem'
import UserNavigation from '@/components/ui/User-navigation/UserNavigation'

import { IUserFavoriteItem } from '@/interfaces/user-favorite-item.types'

import { Meta } from '@/utils/meta'

interface IFavoriteList {
	movie: IUserFavoriteItem | undefined
	actor: IUserFavoriteItem | undefined
	tv: IUserFavoriteItem | undefined
}

const Favorites: FC<IFavoriteList> = ({ movie, actor, tv }) => {
	return (
		<>
			<Meta title="Favorite List">
				<UserNavigation />
				<div>
					{movie && <UserFavoriteItem item={movie}></UserFavoriteItem>}
					{actor && <UserFavoriteItem item={actor}></UserFavoriteItem>}
					{tv && <UserFavoriteItem item={tv}></UserFavoriteItem>}
				</div>
			</Meta>
		</>
	)
}

export default Favorites
