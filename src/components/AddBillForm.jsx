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
                <label>Bill</label>
                <input type="text" name="bill"
                {...register('bill',{required : true, message: 'campo obligatorio'})} />

                <div>
                    {errors?.bill?.message}
                </div>

                <label>Description</label>
                <input type="text" name="description"
                {...register('description',{required : true, message: 'campo obligatorio'})} />

                <div>
                    {errors?.description?.message}
                </div>

                <button>Add new Bill</button>
            </form>
        </Fragment>
     );
}
 
export default AddBillForm;