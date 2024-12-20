import AddTodo from "../Todo/AddTodo";
import Todos from "../Todo/Todos";
function Home() {
  return (
    <>
      <div className=" text-center ">
        <h1>Todo List</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default Home;
