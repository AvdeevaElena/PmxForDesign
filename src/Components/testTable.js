import TutorialDataService from "../services/tutorial.service";
import React, {Component} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { columnDefs, defaultColDef } from "../Columns/columns";
import GridComponents from "./";
import "../../src/App.css";
import "../test.json";
import { Layout} from 'antd';

const frameworkComponents = {
    simpleEditor: GridComponents.SimpleEditor,
    asyncValidationEditor: GridComponents.AsyncValidationEditor,
    autoCompleteEditor: GridComponents.AutoCompleteEditor,
    agDateInput: GridComponents.MyDatePicker,
    dateEditor: GridComponents.DateEditor,
    ActionsRendererListPacients: GridComponents.ActionsRendererListPacients,
    addRowStatusBar: GridComponents.AddRowStatusBar
  }
 
class TestTable extends Component {
   

       state = {
         setRowData: [],
         columnApi: [],
         setColumnApi: [],
         setGridApi: [],
         columnDefs: columnDefs,
         defaultColDef: defaultColDef,
         frameworkComponents: frameworkComponents
        };

        onGridReady = this.onGridReady.bind(this);

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }
  componentDidMount() {
    fetch(
      "https://avdeevaelena.github.io/json/spisokPacientov.json"
    ).then(res => res.json())
     .then(data => {
       const list = data.slice(0, 8);
       this.setState({setRowData: list });
     });
  }

  


  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const rowData = this.state.setRowData;
    return (
        <div   style={{   width: "100%", paddingTop: "60px"}} >
             <h3 style={{ color: '#4B9B00', textAlign: 'center' }}> Список Пациентов </h3> 
             <div id="myGrid" style={{height: "90%", position: "absolute", width: "90%",  paddingLeft: "15px" }} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={rowData}
            getRowNodeId={data => data.id}
            onGridReady={this.onGridReady}
            frameworkComponents={frameworkComponents}
            editType="fullRow"
            suppressClickEdit
            statusBar={{
              statusPanels: [{ statusPanel: "addRowStatusBar" }]
            }}
          />
            </div>
      </div>
    );
  }
}
export default TestTable;