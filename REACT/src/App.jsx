import Header from './My_Components/Header.jsx'
import Footer from './My_Components/Footer.jsx'
import Food from './My_Components/Food.jsx'
import Card from './My_Components/Card.jsx'
import Button from './My_Components/Button.jsx'
import Student from './My_Components/Student.jsx'
import UserGreetings from './My_Components/UserGreetings.jsx'
import List from './My_Components/List.jsx'


// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

function App() {

   const fruits = [ { id: 1 ,name: "apple", calories : 95}, 
                    {id: 2 ,name: "orange" ,calories: 45}, 
                    {id: 3 ,name: "banana", calories: 39},
                     {id:4 , name: "coconut", calories: 109}, 
                     {id:5 ,name: "pineapple",calories: 78}];

   const vegetables = [ { id: 6 ,name: "potatoes", calories : 95}, 
                    {id: 7 ,name: "carrots" ,calories: 45}, 
                    {id: 8 ,name: "brocoli", calories: 39},
                     {id:9 , name: "corn", calories: 109}, 
                     {id:10 ,name: "celery",calories: 78}];
  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    <Card></Card>
    <Button></Button>
    <Student name="Siya" age = {20} isStudent = {true}></Student>
    <Student name="Tiny" age = {18} isStudent = {false}></Student>
    <Student name="Ajay" age={50} isStudents = {false}></Student>
    <Student name="Saloni" age={26} isStudent = {true}></Student>
    <Student></Student>
    <UserGreetings isLoggedIn={true} username ="Siya"></UserGreetings>
    { fruits.length >0 ? <List items={fruits} category="Fruits"></List> : null}
    {vegetables.length>0 && <List items={vegetables} category="Vegetables"></List> }
    </>
  );
}

export default App
