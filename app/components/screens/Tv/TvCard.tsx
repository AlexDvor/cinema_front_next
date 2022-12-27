import Image from 'next/legacy/image'
import { FC } from 'react'

import { IDescriptionTvItem } from '@/interfaces/tv.types'

import { getPosterImage } from '@/configs/url.config'

import styles from './TvCard.module.scss'

interface ITvCard {
	tv: IDescriptionTvItem
}

const TvCard: FC<ITvCard> = ({ tv }) => {
	console.log('🚀 - tv', tv)
	return <></>
}

export default TvCard
