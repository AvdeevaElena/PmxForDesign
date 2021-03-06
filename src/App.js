import React, { Component } from 'react';
import MenuBar from './Components/MenuBar';
import Kartochka from './Components/Kartochka';
import DemoNews2 from './Components/DemoNews2';
import TestTable from './Components/testTable';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ZapiskiTable from './Components/zapiskiTable';
import ZapiskiTableRole from './Components/zapiskiTableRole';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div style ={{backgraund:"green",  marginRight:5, marginTop:10, width: "100%",  height: "100%", display:"flex"}}>
      <MenuBar/>
            <Switch>                    
                        <Route path="/Kartochka" component={Kartochka} />
                        <Route path="/DemoNews2" component={DemoNews2} />
                        <Route path="/TestTable" component={TestTable} />
                        <Route path="/ZapiskiTable" component={ZapiskiTable} />
                        <Route path="/ZapiskiTableRole" component={ZapiskiTableRole} />
                       
             </Switch>
      </div>
       </BrowserRouter>
    );
  }
}

export default App;