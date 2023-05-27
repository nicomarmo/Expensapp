import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import Estilos from '../Styles/Inputs.module.css'

const EntryIncome = (props) => {

    const onSubmit = (data, e) => {
        props.addIncome(data)
        setIncome(income + parseFloat(data.income));
        e.target.reset();
    }

    const [income, setIncome] = useState(0);
    console.log('--------')
    console.log(typeof income.income);
    console.log('--------')

    const totalIncome = props.incomes.reduce((total, income) => total + parseFloat(income.income), 0);
    console.log('despues de '+ totalIncome)
    
    const totalExpenses = props.expenses.reduce((total, expense) => total + expense.bill, 0);
    const balance = totalIncome - totalExpenses;
    
    console.log(income.income);
    console.log(totalIncome);
    console.log(balance);
    console.log(totalExpenses);

    const {register, formState: {errors}, handleSubmit} = useForm();


    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label><h2>Income</h2></label>
                <input className= {Estilos.inputG} type="number" name="income" step="any" min='0' defaultValue=''
                {...register('income',{required : true, message: 'campo obligatorio'})}
                {...register("income", { min: 0 })} />
                
                <label>Description</label>
                <input className= {Estilos.inputG} type="text" name="description"
                {...register('description',{required : true, message: 'campo obligatorio'})} />
                <div>
                    {errors?.description?.message}
                </div>

                <label>Date</label>
                <input className= {Estilos.inputG} type="date" name='date'
                {...register('date',{required : true, message: 'campo obligatorio'})} />
                <div>
                    {errors?.date?.message}
                </div>
                
                <button>Add</button>

            </form>
            <h3>Total Income: $ {parseFloat(totalIncome).toFixed(2)}</h3>
            <h3>Balance: $ {balance.toFixed(2)} </h3>
        </Fragment>
     );
}
 
export default EntryIncome;

