import "./expenses.css"

function Expenses(){

    let data = [
        {date: '22-03-2023', name: 'car-insurance', amount: 5000},
        {date: '22-03-2023', name: 'bike', amount: 2000},
        {date: '24-03-2023', name: 'books', amount: 3000},
        {date: '24-03-2023', name: 'tv', amount: 10000},
        {date: '25-03-2023', name: 'groceries', amount: 1000},
        {date: '27-03-2023', name: 'furniture', amount: 8000},
        {date: '28-03-2023', name: 'dresses', amount: 6000},
    ]

    return <>
    <div> I m expenses </div>
    <div> I m other expenses </div>

    

    
    <div className='expense-item' >
        <div className='expense-name'> {data[0].name} </div>
        <div className='expense-date'> {data[0].date} </div>
        <div className='expense-amount'> {data[0].amount} </div>
    </div>
    <div className='expense-item' >
        <div className='expense-name'> {data[1].name} </div>
        <div className='expense-date'> {data[1].date} </div>
        <div className='expense-amount'> {data[1].amount} </div>
    </div>
    <div className='expense-item' >
        <div className='expense-name'> {data[2].name} </div>
        <div className='expense-date'> {data[2].date} </div>
        <div className='expense-amount'> {data[2].amount} </div>
    </div>
    <div className='expense-item' >
        <div className='expense-name'> {data[3].name} </div>
        <div className='expense-date'> {data[3].date} </div>
        <div className='expense-amount'> {data[3].amount} </div>
    </div>
    <div className='expense-item' >
        <div className='expense-name'> {data[4].name} </div>
        <div className='expense-date'> {data[4].date} </div>
        <div className='expense-amount'> {data[4].amount} </div>
    </div>
    </>
    
}

export default Expenses;

