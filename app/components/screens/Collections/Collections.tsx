import { FC } from 'react'

import Description from '@/components/ui/Heading/Description'
import Heading from '@/components/ui/Heading/Heading'

import { IGenreItem } from '@/interfaces/genres.types'

import { Meta } from '@/utils/meta'

import CollectionItem from './CollectionItem'
import styles from './Collections.module.scss'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: IGenreItem[] }> = ({ collections }) => {
	return (
		<>
			<Meta title={title} description={description}>
				<Heading title="Discovery"></Heading>
				<Description text={description} className={styles.description} />
				<section className={styles.collections}>
					{collections.map((collection) => (
						<CollectionItem key={collection.genreId} collection={collection} />
					))}
				</section>
			</Meta>
		</>
	)
}

export default Collections
