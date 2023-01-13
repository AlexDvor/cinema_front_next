import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'

import { useAuth } from '@/hooks/useAuth'

import { ITrailerItem } from '@/interfaces/trailer.types'

import { getYouTubeUrl } from '@/configs/url.config'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'

interface IVideoProps {
	trailers: ITrailerItem[]
	movieKey: number
}

const VideoPlayer: FC<IVideoProps> = ({ trailers, movieKey }) => {
	const { user } = useAuth()

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
										config={{
											playerVars: { origin: window.location.origin },
										}}
									/>
								</div>
							</li>
						))}
				</ul>
			) : (
				<>
					<AuthPlaceholder id={movieKey} />
				</>
			)}
		</>
	)
}

export default VideoPlayer
