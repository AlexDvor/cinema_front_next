import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'

import { ITrailerItem } from '@/interfaces/trailer.types'

import { getYouTubeUrl } from '@/configs/url.config'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'

interface IVideoProps {
	trailers: ITrailerItem[]
}

const VideoPlayer: FC<IVideoProps> = ({ trailers }) => {
	const user = false // User from Redux
	return (
		<>
			{user ? (
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
			) : (
				<AuthPlaceholder slug={trailers[0].name} />
			)}
		</>
	)
}

export default VideoPlayer
