import './variables.css'
function Variables(){

    let lname = 'Geedipally';
    let age = 34;
    let user = {    //object
        name: 'react',
        exp : 5,
    }
    let interest = null;
    let undf;
    let gender = false;
    let fruits = ['kiwi', 'Melon']; //array
    return (<div> {lname} this is variables component
    <pre>
        {age} <br/>
        {user.name} <br/>
        {interest} <br/>
        {undf} <br/>
        {gender} <br/>
        {fruits} <br/>
        
    </pre>
    </div>)
}

export default Variables;

// {} is called as string interpolation or data binding -- simple data binding this can also be used for expressions , using java script variables in html