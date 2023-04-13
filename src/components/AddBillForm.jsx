import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'


const AddBillForm = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        props.addExpense(data)
        //clean dates
        e.target.reset();
    }

    return ( 
        <Fragment>
                <form onSubmit={handleSubmit(onSubmit)}>
                <label>Amount</label>
                <input type="number" name="bill" step="any"
                {...register('bill',{required : true, message: 'campo obligatorio'})}
                {...register("bill", { min: 0 })} />
                <div>
                    {errors?.bill?.message}
                </div>

                <label>Description</label>
                <input type="text" name="description"
                {...register('description',{required : true, message: 'campo obligatorio'})} />
                <div>
                    {errors?.description?.message}
                </div>

                <label>Date</label>
                <input type="date" name='date'
                {...register('date',{required : true, message: 'campo obligatorio'})} />
                <div>
                    {errors?.date?.message}
                </div>

                <button>Add</button>
            </form>
        </Fragment>
     );
}
 
export default AddBillForm;