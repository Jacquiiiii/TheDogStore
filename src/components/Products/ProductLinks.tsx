import { LinkContainer, NavLink } from './styles'

const ProductLinks = () => {
  return (
    <LinkContainer>
      <NavLink to="/AllProducts" data-cy="products-link">All</NavLink>
      <NavLink to="/Food" data-cy="food-link">Food</NavLink>
      <NavLink to="/Treats" data-cy="treats-link">Treats</NavLink>
      <NavLink to="/Toys" data-cy="toys-link">Toys</NavLink>
      <NavLink to="/Supplies" data-cy="supplies-link">Supplies</NavLink>
    </LinkContainer>
  )
}

export default ProductLinks