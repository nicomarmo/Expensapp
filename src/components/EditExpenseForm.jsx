import React, {Fragment, useEffect} from 'react'
import {useForm} from 'react-hook-form'

const EditExpenseForm = (props) => {

    const {register, formState: {errors}, handleSubmit, setValue} = useForm({
        defaultValues: props.currentExpense
    });

    useEffect(()=>{
        setValue('bill', props.currentExpense.bill);
        setValue('description', props.currentExpense.description);
        setValue('date', props.currentExpense.date);
    }, [props.currentExpense, setValue]);

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentExpense.id
        props.updateExpense(props.currentExpense.id, data)

        //clean dates
        e.target.reset()
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

                <label>Date</label>
                <input type="date" name='date'
                {...register('date',{required : true, message: 'campo obligatorio'})} />
                <div>
                    {errors?.date?.message}
                </div>

                <button>Edit</button>
            </form>
        </Fragment>
     );
}
 
export default EditExpenseForm;