// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App(props) {
  const expenses=[
    {id:'e1',
    title:'Car Insurance',
    amount:294.67,
    date:new Date(2023,6,13)},
      {id:'e2',
      title:'Newspaper',
      amount:94.67,
      date:new Date(2023,6,13)},      
      {id:'e3',title:'Car Insurance',amount:24.67,date:new Date(2023,6,13)},      
      {id:'e4',title:'Car Insurance',amount:29.67,date:new Date(2023,6,13)},
    
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
     
    <Expenses items={expenses}/>

    </div>
  );
}

export default App;
