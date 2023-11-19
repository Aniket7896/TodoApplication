import Nav from "../Components/Nav"
import Row from "../Components/Row"
import TodoInput from "../Components/TodoInput"

const HomePage = () => {
  return (
    <div>
        <h1 style={{border:"6px solid black",margin:"auto",}}>TODO APP</h1>
        <Nav/>

        <TodoInput/>
        <Row/>
    </div>
  )
}
export default HomePage