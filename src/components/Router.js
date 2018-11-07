import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import TextInput from "./TextInput";
import {CommonUris} from "../constants/Uris";
export default class Router extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container-fluid" style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <Route path={CommonUris.PAGE_INDEX} component={TextInput}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }

}