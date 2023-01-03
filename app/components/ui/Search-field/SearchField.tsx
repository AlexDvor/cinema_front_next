import { FC } from 'react'
import { ChangeEvent } from 'react'

import MaterialIcon from '../MaterialIcon/MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	onClickCloseButton: () => void
}

const SearchField: FC<ISearchField> = ({
	handleSearch,
	searchTerm,
	onClickCloseButton,
}) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Search" value={searchTerm} onChange={handleSearch} />
			{searchTerm && (
				<button onClick={onClickCloseButton}>
					<MaterialIcon name="MdClose" />
				</button>
			)}
		</div>
	)
}

export default SearchField
