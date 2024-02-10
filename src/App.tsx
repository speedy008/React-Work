import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import Categories from "./components/expense-tracker/categories";


 function App(){
 const [selectedCategory, setSelectedCategory] = useState('')
 const [expenses, setExpense] = useState([
    {id:1, description: 'aaa', amount: 10, category: 'utilites'},
    {id:2, description: 'bbb', amount: 10, category: 'utilites'},
    {id:3, description: 'ccc', amount: 10, category: 'utilites'},
    {id:4, description: 'ddd', amount: 10, category: 'utilites'},
    {id:5, description: 'eee', amount: 10, category: 'utilites'},
])

const visibleCategory = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses

  return <>
  <div className="mb-5">
      <ExpenseForm onSubmit={(expense) => setExpense([...expenses, {...expense ,id: expenses.length + 1}])} />
  </div>
    <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category)=> setSelectedCategory(category)} />
    </div>
    <ExpenseList expenses={visibleCategory}  onDelete={(id)=> setExpense(expenses.filter((e)=> e.id!== id))}/>
  </>
 }

 export default App