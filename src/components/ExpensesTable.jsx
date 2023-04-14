import React from 'react'

const ExpensesTable = (props) => {


    console.log(props.expenses)
    console.log(props.incomes)

    return ( 
        <table>
        <thead>
        <tr>
            <th>Total</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
                props.expenses.length > 0 ?
                props.expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>- $ {expense.bill}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>
                            <td>
                            <button className="button muted-button"
                            onClick={() => {props.editRow(expense)}}>Edit</button>

                            <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                )) : (
                    <tr>
                        <td colSpan={3}>No Expenses</td>
                    </tr>
                )
            }

            {
                props.incomes.length > 0 ?
                props.incomes.map(income => (
                        <tr key={income.id} >
                            <td>+ $ {income.income}</td>
                            <td>{income.description}</td>
                            <td>{income.date}</td>
                            <td>
                            <button className="button muted-button"
                            onClick={() => {props.editRow(income)}}>Edit</button>

                            <button className="button muted-button"
                            onClick={()=>{props.deleteIncomes(income.id)}}>Delete</button>
                            </td>
                        </tr>
                )) : (
                    <tr>
                        <td colSpan={3}>No Incomes</td>
                    </tr>
                )
            }
        </tbody>
    </table>
     );
}
 
export default ExpensesTable;