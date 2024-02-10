import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3, {message: 'Name must be atleast 3 Characters'}),
    age: z.number({invalid_type_error: 'Age Field is required'}).min(18, {message: 'Age must be more than or equal to 18'})
})

type FormData = z.infer<typeof schema>


const Form = () => {
    const {register, handleSubmit, formState: {errors , isValid, submitCount}} = useForm<FormData>({resolver: zodResolver(schema)})
    const onSubmit = (data:FieldValues) => console.log(data,submitCount)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3"><label htmlFor="name" className="form-label">Name</label>
            <input {...register('name', {required: true , minLength: 3})}  id='name' type="text" className="form-control" />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
        </div>
        <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
            <input {...register('age', {required: true, valueAsNumber: true})} id='age' type="number" className="form-control" />
            {errors.age && <p className='text-danger'>{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form