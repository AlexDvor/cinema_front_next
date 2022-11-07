import { FC } from 'react'

import { ISearchField } from '@/interfaces/search-field.types'

import MaterialIcon from '../MaterialIcon/MaterialIcon'

import styles from './SearchField.module.scss'

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Search" value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
