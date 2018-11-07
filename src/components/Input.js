import React from "react";
import ReactDOM from "react-dom";

export default class Input extends React.Component{
    constructor(props) {
        super(props);
    }
      render() {
          const {value} = this.props
        return (
            <div>
                <div>
                    <input type="text" name="value" value={value} onChange={e => this.props.onChange(e, this.props.reactKey)}/>
                </div>
            </div>
            )
        }
    }