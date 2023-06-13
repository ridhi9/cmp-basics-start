import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
function ExpenseItem(props){
 
    return( 
    <Card className='expense-item'>
        
        <div className='expense-item__description'>
            <ExpenseDate date ={props.date}/>
            {/* insert any variable above in bracket  */}
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card>
    );
    // error above as in react we can use only one root element

}
export default ExpenseItem;