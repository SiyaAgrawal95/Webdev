import Header from './My_Components/Header.jsx'
import Footer from './My_Components/Footer.jsx'
import Food from './My_Components/Food.jsx'
import Card from './My_Components/Card.jsx'
import Button from './My_Components/Button.jsx'
import Student from './My_Components/Student.jsx'
import UserGreetings from './My_Components/UserGreetings.jsx'


// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

function App() {
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
    </>
  );
}

export default App
