import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav"
import Row from "../Components/Row"
import TodoInput from "../Components/TodoInput"
import { useEffect } from "react";
import { getData } from "../Redux/action";

const HomePage = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.reducer.todos);
    console.log(data);

    useEffect(() => {
      dispatch(getData());
    }, []);
  return (
    <div style={{width:"50%",margin:"auto",border:"6px solid black"}}>
     
        <h1>TODO APP</h1>
        <Nav />

        <TodoInput />
        {
            data?.map((ele) => (
          <Row key={ele.id} id={ele.id} title={ele.title} status={ele.status}  />
        ))}
      </div>
   
  );
}
export default HomePage