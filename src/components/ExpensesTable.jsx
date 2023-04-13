import React from 'react'

const ExpensesTable = (props) => {


    console.log(props.expenses)

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
                            <td>$ {expense.bill}</td>
                            <td>{expense.description}</td>
                            <td>{expense.date}</td>
                            <td>
                            <button className="button muted-button"
                            onClick={() => {props.editRow(expense)}}>Edit</button>

                            <button className="button muted-button"
                            onClick={()=>{props.deleteExpense(expense.id)}}>Delete</button>
                            </td>
                        </tr>
                )) : (
                    <tr>
                        <td colSpan={3}>No Expenses</td>
                    </tr>
                )
            }
        </tbody>
    </table>
     );
}
 
export default ExpensesTable;

/////Hola! si esto esta es que se subio canchero 3/////