import cn from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FC } from 'react'

import { IUserFavoriteItem } from '@/interfaces/user-favorite-item.types'

import { getFullWidthBackdrop } from '@/configs/url.config'

import styles from './UserFavoriteItem.module.scss'

const UserFavoriteItem: FC<{ item: IUserFavoriteItem }> = ({ item }) => {
	return (
		<>
			<Link
				href={item.link}
				className={cn(styles.item, styles.withText, styles.horizontal)}
			>
				<Image
					alt={item.title}
					src={getFullWidthBackdrop(item.poster)}
					layout="fill"
					draggable={false}
					priority
				/>

				<div className={styles.content}>
					<div className={styles.title}>{item.title}</div>
				</div>
			</Link>
		</>
	)
}

export default UserFavoriteItem
