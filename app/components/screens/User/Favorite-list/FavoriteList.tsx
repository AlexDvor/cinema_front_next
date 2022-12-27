import { FC } from 'react'

import Description from '@/components/ui/Heading/Description'
import Heading from '@/components/ui/Heading/Heading'

import { Meta } from '@/utils/meta'

import styles from './Favorite.module.scss'
import FavoriteItem from './FavoriteItem'

export type TData = {
	id: number
	title: string
	url: string
	posterPath: string
}

interface IFavoriteList {
	title: string
	description?: string
	data: TData[]
}

const FavoriteList: FC<IFavoriteList> = ({ title, description, data }) => {
	return (
		<>
			<Meta title={title} description={description}>
				<Heading title={title} className={styles.heading} />
				{description && (
					<Description text={description} className={styles.description} />
				)}
				<section className={styles.movies}>
					{data.map((item: TData) => (
						<FavoriteItem key={item.id} variant="vertical" item={item} />
					))}
				</section>
			</Meta>
		</>
	)
}

export default FavoriteList
