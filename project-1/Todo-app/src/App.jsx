import React,{ useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from "/src/components/TodoList.jsx";
import './App.css'

function App() {
  const [listTodo,setListTodo] = useState([]);
  
  let addList=(inputText)=>{

    setListTodo([...listTodo,inputText])
    
  }

  const deleteListItem = (key)=>{
    var newListTodo = [...listTodo]
    newListTodo.splice(key,1)  // key kiso batai hai, no 1 2 3 etc batata hai kitne us key se aage tak (inclusively)
    setListTodo([...newListTodo])
  }

  return (
    <div className='main-container'>
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
          <hr />
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}  
      </div>
      
    </div>
  )
}

export default App


// what with index={i} bro ? key ={i} still works without an error
 // property deleteItem={deleteListItem}/* array function call kiya*/ create ki <TodoList/> card mein