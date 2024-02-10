import Categories from '../categories'
interface Props {
    onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({onSelectCategory} : Props) => {
  return (
    <select name="" id="" className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {Categories.map(category => <option value={category} key={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter