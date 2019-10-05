import React ,{Component} from 'react'
import ToDoItems from './ToDoItems'
import './ToDo.css'
import logo from './logo.svg';


 class ToDo extends Component{
   constructor(props){
     super(props)
     this.state={
       lists:[{'todo':'clean the house'},
       {'todo':'wash clothes'}
        ,
       ],
       input:'',
     }

   }

   deleteItem = (todo) =>{
     console.log("deleteItem");
     this.setState((currentState) =>{
       return {
         lists: currentState.lists.filter((l) => l.todo !== todo )
       }

     }
   )
   }

   updateInput = (e) =>{
    const value = e.target.value
    this.setState({input:value})
  }

  addItem = () =>{
   this.setState((currentState) =>{
     return{
       lists:currentState.lists.concat([{
         todo:currentState.input,
       }]),
       input:''
     }
   })
 }

  handleKeyPress = (e) => {
    if(e.target.value !==''){
      if(e.key === 'Enter'){
        this.addItem()
      }
    }
  }

   render(){
     return(
       <div className="ToDo">
         <img src={logo} className="Logo" alt="logo" />
         <h1 className="ToDo-Header">React To Do</h1>
         <div className="ToDo-Container">

           <div className="ToDo-Content">
               <ToDoItems
                 list={this.state.lists}
                 onRemoveItem={this.deleteItem}
               />
                <div>
                  <input type="text" value={this.state.input} onChange={this.updateInput} onKeyPress={this.handleKeyPress} />
                  <button className="ToDo-Add" onClick={this.addItem}>+</button>
                </div>
            </div>
       </div>
     </div>
     )
   }
 }
export default ToDo
