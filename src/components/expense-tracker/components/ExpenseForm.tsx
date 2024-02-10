import Categories from '../categories'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
    onSubmit: (data: FormData) => void
}


const schema = z.object({
    description: z.string().min(3, {message: 'Description must be atleast of 3 Chars'}).max(50, {message: 'Description should be max of 50 Chars'}),
    amount: z.number({invalid_type_error:'Amount is required'}).min(0.01,{message: 'Amount must be atleast od 0.01'}).max(100_000),
    category:z.enum(Categories, {
        errorMap: () => ({message: 'Category is required'})
    })
})

type FormData = z.infer<typeof schema>
const ExpenseForm = ({onSubmit} : Props) => {
  const { handleSubmit , register, reset , formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit((data) => {
        onSubmit(data)
        reset()
    })}> 
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description',{required:true})} id="description" className='form-control' type="text"  />
            {errors.description && <p className='text-danger'> {errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount',{required:true, valueAsNumber: true,})}  id="amount" className='form-control'  type="number" />
            {errors.amount && <p className='text-danger'> {errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Categories</label>
            <select id="category"  {...register('category', {required:true})} className="form-control">
                <option value="">All Category</option>
                {Categories.map(category => <option value={category} key={category}>{category}</option>)}
            </select>
            {errors.category && <p className='text-danger'> {errors.category.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary" type='submit'>Submit</button>
    </form>
  )
}

export default ExpenseForm