import React from "react";

export default class Show extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div>
            show value: {this.props.value}
        </div>
        )
    }
}