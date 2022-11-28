import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'

import { ITrailerItem } from '@/interfaces/trailer.types'

import { getYouTubeUrl } from '@/configs/url.config'

import styles from './VideoPlayer.module.scss'

interface IVideoProps {
	trailers: ITrailerItem[]
}

const VideoPlayer: FC<IVideoProps> = ({ trailers }) => {
	return (
		<ul className={styles.content}>
			{trailers &&
				trailers.slice(0, 3).map((item) => (
					<li className={styles.item} key={item.id}>
						<div className={styles.playerWrapper}>
							<ReactPlayer
								className={styles.reactPlayer}
								url={getYouTubeUrl(item.key)}
								width="100%"
								height="100%"
								controls={true}
							/>
						</div>
					</li>
				))}
		</ul>
	)
}

export default VideoPlayer
