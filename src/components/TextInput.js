import React from "react";
import Input from "./Input";
import Show from "./Show";
import DeleteButton from "./DeleteButton"
import {connect} from 'react-redux';
import {getState} from "../constants/actions";
import {IndexEvents} from "../constants/Events";

 class TextInput extends React.Component{
    constructor() {
        super();
        this.state = {
            inputArray:[
                // {value:''}
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange(event, index) {    
        
        let changeArray = this.state.inputArray
        // let newObj = Object.assign(changeArray[index],{[event.target.name]: event.target.value})

        let newObj = Object.assign(changeArray[index],{[event.target.name]: event.target.value})

        this.setState(changeArray);

        // console.log("inputArray")
        // console.log(changeArray)
        // console.log(newObj)
        // this.setState({'inputArray': changeArray}, () => console.log(this.state));
        // console.log("index: " + this.state.inputArray.length);
      }

    add(){
        let inputArray = this.state.inputArray;
        
        inputArray.push(
            {value:''});
        this.setState(inputArray);


      this.props.dispatch({type: "REST_INDEX", state:this.state})
    }

   componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps"); //FIXME DEBUG LOG
     console.log("this.props.reduxState"); //FIXME DEBUG LOG
     console.log(this.props.reduxState); //FIXME DEBUG LOG
     console.log("nextProps.reduxState"); //FIXME DEBUG LOG
     console.log(nextProps.reduxState); //FIXME DEBUG LOG

   }




   delete(event , index){
 
        console.log("delete index :" + index)
        console.log("delete value :" + this.state.inputArray[index].value)
 
        let inputArray = this.state.inputArray;
        inputArray.splice(index,1);
        this.setState(inputArray);         
    }

    render() {

        let text = this.state.inputArray.map((obj, index) => {
            return <Input key={index} onChange={this.handleChange} reactKey={index} value = {obj.value} />});
        
        let deleteButton = this.state.inputArray.map((obj, index) => {
            return <DeleteButton key={index} onClick={this.delete} reactKey={index} />});

        let showText = this.state.inputArray.map((obj, index) => {
            return <Show key={index} value={obj.value}/>});

    return (
    <div>
        <button onClick={this.add}>add</button>
        <table className="table table-bordered">
        <thead>
            <tr>
                <th>DELETE BUTTON</th>
                <th>TEXT ITEM</th>
                <th>SHOW ITEM</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {text}
                    </td>
                    <td>
                        {deleteButton}
                    </td>
                    <td>
                        {showText}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    reduxState:state.index.globalState
  }
};
export default connect(mapStateToProps)(TextInput);