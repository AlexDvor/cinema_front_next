import Link from 'next/link'
import { FC, Fragment } from 'react'

import styles from './ContentTvList.module.scss'

interface ILink {
	id: string
	link: string
	title: string
}

interface IContentList {
	name: string
	links: ILink[]
}

const ContentTvList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}:</div>
			<div className={styles.links}>
				{links.slice(0, 3).map(({ link, title, id }, idx) => (
					<Fragment key={id}>
						<Link href={link}>{title}</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentTvList
