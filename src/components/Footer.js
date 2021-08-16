import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import '../styles/buttonStyles.scss'
import '../styles/footerStyles.scss'

const Footer = () => (
  <div className='footer'>
    <div>
      <span>Show: </span>
    </div>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
