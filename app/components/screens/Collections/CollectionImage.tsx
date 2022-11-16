import Image from 'next/legacy/image'
import { FC } from 'react'

import { IGenreItem, IGenresItem } from '@/interfaces/genres.types'

import { getPosterImage } from '@/configs/url.config'

const CollectionImage: FC<{ collection: IGenreItem }> = ({
	collection: { genreName, backdropPath },
}) => {
	return (
		<Image
			alt={genreName}
			src={getPosterImage(backdropPath)}
			layout="fill"
			draggable={false}
			priority
		/>
	)
}

export default CollectionImage
