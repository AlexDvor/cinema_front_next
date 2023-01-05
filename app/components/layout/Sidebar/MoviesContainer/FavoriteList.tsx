import Link from 'next/link'
import { FC } from 'react'

import { IFavoriteItem, TUrl } from '@/interfaces/favorites.types'

import FavoriteItem from './FavoriteItem'
import styles from './FavoriteList.module.scss'

interface IFavoriteList {
	link: string
	item: IFavoriteItem[]
	title: string
	typeUrl: TUrl
}

const FavoriteList: FC<{ list: IFavoriteList }> = ({
	list: { item, title, link, typeUrl },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{item &&
				item.map((article) => (
					<FavoriteItem key={article.id} article={article} typeUrl={typeUrl} />
				))}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}

export default FavoriteList
