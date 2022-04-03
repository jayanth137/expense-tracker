import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpensesContainer from './components/IncomeExpensesContainer';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
      <Balance/>
      <IncomeExpensesContainer/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
