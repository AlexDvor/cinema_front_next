import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon/MaterialIcon'

import { IFavoriteItem, TUrl } from '@/interfaces/favorites.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'
import { getUrlByType } from '@/utils/movie/getUrlByType'

import { getGenreUrl, getPosterImage } from '@/configs/url.config'

import styles from './FavoriteList.module.scss'

interface IFavoriteItemProps {
	article: IFavoriteItem
	typeUrl: TUrl
}

const FavoriteItem: FC<IFavoriteItemProps> = ({ article, typeUrl }) => {
	return (
		<div className={styles.item}>
			<Link href={String(getUrlByType(typeUrl, article.id))}>
				<Image
					alt={article.title}
					width={65}
					height={97}
					src={getPosterImage(article.poster)}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{article.title}</div>
					<div className={styles.genres}>
						{article.genres.map((item, idx) => (
							<Link key={item.id} href={getGenreUrl(item.id)}>
								{getGenresListEach(idx, article.genres.length, item.name)}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{article.vote_average.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default FavoriteItem
