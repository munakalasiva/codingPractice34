import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderRatingFilterList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props

      const onclickRating = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? 'active rating' : 'rating'

      return (
        <li
          key={rating.ratingId}
          onClick={onclickRating}
          className="rating-item"
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />

          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderRatingFilterList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props

      const onClickCategory = () => changeCategory(category.categoryId)

      const categoryClassName =
        activeCategoryId === category.categoryId
          ? 'active category'
          : 'category'

      return (
        <li
          key={category.categoryId}
          onClick={onClickCategory}
          className="category-item"
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategory = () => (
    <div>
      <h1>Category</h1>
      <ul>{renderCategoryList()}</ul>
    </div>
  )

  const onChangeSearchInput = event => {
    const {changeSearch} = props
    changeSearch(event.target.value)
  }

  const enterSearch = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div>
        <input
          value={searchInput}
          type="search"
          placeholder="search"
          onChange={onChangeSearchInput}
          onKeyDown={enterSearch}
        />

        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div>
      {renderSearchInput()}
      {renderCategory()}
      {renderRatingFilters()}

      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
