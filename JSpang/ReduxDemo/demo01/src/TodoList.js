import React,{ Component } from 'react';
// import axios from 'axios'

import store from './store'
import { changeInputAction,addItemAction,deleteItemAction,getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{

    constructor(props){
        super(props)
        // console.log(store.getState());
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        store.subscribe(this.storeChange)//订阅模式
    }
    render(){
        return(
            <TodoListUI 
                inputValue={this.state.inputValue }
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }
    changeInputValue(e){
       const action=changeInputAction(e.target.value)
       store.dispatch(action)
    }
    // componentDidMount(){
    //     axios.get('')
    //     .then((res)=>{
    //        const data=res.data
    //        const action=getListAction(data)
    //        store.dispatch(action)
    //     })
    // }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action =addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action =deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList