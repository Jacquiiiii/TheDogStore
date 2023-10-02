import { FilterContainer, SearchBar } from './styles'
import { greenButtonColor } from '../../constants/constants'

import ProductLinks from './ProductLinks'
import Button from '../Button/Button'

const Filter = () => {
  return (
    <FilterContainer>
      <SearchBar>
        <input placeholder=""/>
        <Button buttonText="Search" color={greenButtonColor} />
      </SearchBar>
      <ProductLinks />
    </FilterContainer>
  )
}

export default Filter
