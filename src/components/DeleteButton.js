import React from "react";

export default class DeleteButton extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <div>
            <button onClick={e => this.props.onClick(e,this.props.reactKey)}>Delete </button>
        </div>
        )
    }
}
