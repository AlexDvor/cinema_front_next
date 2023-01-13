import Image from 'next/legacy/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	imagePath: string
	Detail?: FC | null
	posterName: string
}

const Banner: FC<IBanner> = ({ imagePath, Detail, posterName }) => {
	return (
		<div className={styles.banner}>
			<Image
				alt={posterName}
				src={imagePath}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
