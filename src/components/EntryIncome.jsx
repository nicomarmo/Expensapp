import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const EntryIncome = (props) => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const [totalIncome, setTotalIncome] = useState(0);
    
    const onSubmit = (data, e) => {
        console.log(data)
        props.addIncome(data)
        setTotalIncome(totalIncome + parseFloat(data.income));
        e.target.reset();
    }

    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label><h2>Income</h2></label>
                <input type="number" name="income" step="any" min='0' defaultValue=''
                {...register('income',{required : true, message: 'campo obligatorio'})}
                {...register("income", { min: 0 })} />
                <button>Add</button>
                {
                props.incomes.length > 0 ?
                props.incomes.map(income => (
                    <div key={income.id}>
                        <h3>Income: $ {income.income}</h3>
                    </div>
                )) :
                (<div>
                    <h5 colSpan={3}>No Incomes Jet</h5>
                </div>)
            }
            </form>
            <h3>Total Income: $ {totalIncome.toFixed(2)}</h3>
        </Fragment>
     );
}
 
export default EntryIncome;

/////Hola! si esto esta es que se subio canchero 2/////