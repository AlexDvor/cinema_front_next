import Link from 'next/link'
import { FC } from 'react'

import { IGenreItem } from '@/interfaces/genres.types'

import { getGenreUrl } from '@/configs/url.config'

import CollectionImage from './CollectionImage'
import styles from './Collections.module.scss'

const CollectionItem: FC<{ collection: IGenreItem }> = ({ collection }) => {
	return (
		<Link
			href={getGenreUrl(`${collection.genreId}`)}
			className={styles.collection}
		>
			<CollectionImage collection={collection} />

			<div className={styles.content}>
				<div className={styles.title}>{collection.genreName}</div>
			</div>

			{/* <div className={`${styles.behind} ${styles.second}`}>
					<CollectionImage collection={collection} />
				</div>

				<div className={`${styles.behind} ${styles.third}`}>
					<CollectionImage collection={collection} />
				</div> */}
		</Link>
	)
}

export default CollectionItem
