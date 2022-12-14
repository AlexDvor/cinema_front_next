import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'

import SearchField from '@/components/ui/Search-field/SearchField'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data: popularMovies } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getMovieByName(debouncedSearch),
		{
			enabled: !!debouncedSearch,
			select: (data) => data.slice(0, 7),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleCleanSearch = () => {
		setSearchTerm('')
	}

	return (
		<div className="relative">
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				onClickCloseButton={handleCleanSearch}
			/>
			{isSuccess && <SearchList movies={popularMovies || []} />}
		</div>
	)
}

export default Search
