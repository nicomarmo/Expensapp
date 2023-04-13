import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ExpensesTable from './components/ExpensesTable';
import AddBillForm from './components/AddBillForm';
import EditExpenseForm from './components/EditExpenseForm';
import EntryIncome from './components/EntryIncome';


function App() {


  // Add Expenses
  const expenseData = [];

  //state
  const [expenses, setExpenses] = useState(expenseData);

  const addExpense = (expense) => {
    expense.id = uuidv4()
    setExpenses([...expenses, expense])}
  
  //Delete Expenses
  const deleteExpense = (id) => {
    console.log(id)

    const arrayFilter = expenses.filter(expense => expense.id !== id);

    setExpenses(arrayFilter);
  }

  //Edit Expenses

  const [editing, setEditing] = useState(false)

  const [currentExpense, setCurrentExpense] = useState({
    id: null, cost: '', description: '', date: ''
  });

  const editRow = (expense) => {
    setEditing(true);
    setCurrentExpense({
      id: expense.id, bill: expense.bill, description: expense.description, date: expense.date
    })
  }

  const updateExpense = (id, updateExpense) => {
    setEditing(false);
    setExpenses(expenses.map(expense =>(expense.id === id ? updateExpense : expense)))
  }

  // Income
  const incomeData = [] 
  const [incomes, setIncome] = useState(incomeData)

  const addIncome = (income) => {
    income.id = uuidv4()
    setIncome([...incomes, income])}
    console.log(incomes)

  return (
    <div className='conteiner'>
      <h1>Expenses App</h1>
      <div className="container">      
      <div className="flex-row">
        <div className="flex-large">
            {
              editing ? (
                <div>
                <h2>Edit Expense</h2>
                <EditExpenseForm currentExpense={currentExpense} updateExpense={updateExpense} />               
              </div>
              ) : (
                <div>
                <h2>Expenses</h2>
                <AddBillForm addExpense={addExpense}/>
                <EntryIncome incomes={incomes} addIncome={addIncome} />
              </div>
              )
            }
      </div>
        <div className="flex-large">
          <h2>View Movements</h2>
            <ExpensesTable expenses={expenses} deleteExpense={deleteExpense} editRow={editRow}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;


/////Hola! si esto esta es que se subio canchero/////