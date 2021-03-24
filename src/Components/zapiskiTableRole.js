
import TutorialDataService from "../services/tutorial.service";
import React, {Component} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { columnDefs, defaultColDef } from "../Columns/columnsZapiskiRole";
import { columnDefs480, defaultColDef480 } from "../Columns/columnsZapiskiRole480";
import GridComponents from "./";
import "../../src/App.css";
import axios from 'axios';
import "../test.json";
import {gridStyleHeader, gridStyleContent} from  './gridsStyle.js';
import { Layout, Menu } from 'antd';
import "./style.css";

const { Header } = Layout;
const frameworkComponents = {
    simpleEditor: GridComponents.SimpleEditor,
    asyncValidationEditor: GridComponents.AsyncValidationEditor,
    autoCompleteEditor: GridComponents.AutoCompleteEditor,
    agDateInput: GridComponents.MyDatePicker,
    dateEditor: GridComponents.DateEditor,
    actionsRenderer: GridComponents.ActionsRendererWithoutDelete,
    addRowStatusBar: GridComponents.AddRowStatusBar
  }
 
class ZapiskiTableRole extends Component {
   

       state = {
         setRowData: [],
         columnApi: [],
         setColumnApi: [],
         setGridApi: [],
         columnDefs: columnDefs,
         defaultColDef: defaultColDef,
         columnDefs480: columnDefs480,
         defaultColDef480: defaultColDef480,
         frameworkComponents: frameworkComponents
        };

        onGridReady = this.onGridReady.bind(this);

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    columnDefs = this.state.columnDefs
    columnDefs480 = this.state.columnDefs480

  componentDidMount() {
    fetch(
      "https://avdeevaelena.github.io/json/spisokZapisok.json"
    ).then(res => res.json())
     .then(data => {
       const list = data.slice(0, 8);
       this.setState({setRowData: list });
     });

     window.addEventListener('resize', function () {
      setTimeout(function () {
          if (window.innerWidth < 480) {
              console.log("HELLO")
             // gridOptions.setColumnDefs(mobileColumn);
             // params.api.sizeColumnsToFit();
const columnDefs480 = [
  {
    headerName: "Содержание",
    field: "content",
    cellEditor: "simpleEditor",
    cellRenderer: 'showMultiline',
    cellClass: 'cell-wrap',
    autoHeight: true
  },
  
  {
    headerName: "Пациент",
    field: "namepasient",
    cellEditor: "simpleEditor",
    cellRenderer: function(params) {
      console.log ("SEACH VALUE", params.value)
      console.log ("SEACH VALUE 2", params.data.id)
      return '<a href="http://localhost:8081/Kartochka/'+params.data.id+'" target="_blank" rel="noopener">'+ params.value+'</a>'
    }
  },
  
  {
    headerName: "Статус",
    field: "status",
    cellEditor: "autoCompleteEditor",
    cellEditorParams: {
      options: [
        "Новая",
        "Назначена",
        "Взята в работу",
        "Исполнена",
        "Отменена",
        "Удалена"
      ]
    }
  } 
];

             this.setState({columnDefs: columnDefs480 });  
            }
            if (window.innerWidth > 480) {
              console.log("HELLO bigger")
              const columnDefs = [
                {
                  headerName: "id",
                  field: "id",
                  cellEditor: "simpleEditor"
                },
                {
                  headerName: "Содержание",
                  field: "content",
                  cellEditor: "simpleEditor",
                  cellRenderer: 'showMultiline',
                  cellClass: 'cell-wrap',
                  autoHeight: true
                },
                {
                    headerName: "Дата создания",
                    field: "datecreate",
                    cellEditor: "simpleEditor"
                  },
                  {
                    headerName: "Дата изменения",
                    field: "datecreate",
                    cellEditor: "simpleEditor"
                  }, 
                {
                  headerName: "Пациент",
                  field: "namepasient",
                  cellEditor: "simpleEditor",
                  cellRenderer: function(params) {
                    console.log ("SEACH VALUE", params.value)
                    console.log ("SEACH VALUE 2", params.data.id)
                    return '<a href="http://localhost:8081/Kartochka/'+params.data.id+'" target="_blank" rel="noopener">'+ params.value+'</a>'
                  }
                },
                {
                  headerName: "Автор",
                  field: "athor",
                  cellEditor: "simpleEditor"
                },
                {
                  headerName: "Исполнитель",
                  field: "executor",
                  cellEditor: "simpleEditor"
                },
                {
                    headerName: "Фактическая дата",
                    field: "datedone",
                    cellEditor: "simpleEditor"
                  },
                {
                  headerName: "Статус",
                  field: "status",
                  cellEditor: "autoCompleteEditor",
                  cellEditorParams: {
                    options: [
                      "Новая",
                      "Назначена",
                      "Взята в работу",
                      "Исполнена",
                      "Отменена",
                      "Удалена"
                    ]
                  }
                }   
              ];            
             this.setState({columnDefs: columnDefs });  
            }
          }.bind(this));
      }.bind(this));
  }

  componentWillUnmount() {

    window.addEventListener('resize', function () {
      setTimeout(function () {
          if (window.innerWidth <= 480) {
              console.log("HELLO")
             // gridOptions.setColumnDefs(mobileColumn);
             // params.api.sizeColumnsToFit();
const columnDefs480 = [
  {
    headerName: "Содержание",
    field: "content",
    cellEditor: "simpleEditor",
    cellRenderer: 'showMultiline',
    cellClass: 'cell-wrap',
    autoHeight: true
  },
  
  {
    headerName: "Пациент",
    field: "namepasient",
    cellEditor: "simpleEditor",
    cellRenderer: function(params) {
      console.log ("SEACH VALUE", params.value)
      console.log ("SEACH VALUE 2", params.data.id)
      return '<a href="http://localhost:8081/Kartochka/'+params.data.id+'" target="_blank" rel="noopener">'+ params.value+'</a>'
    }
  },
  
  {
    headerName: "Статус",
    field: "status",
    cellEditor: "autoCompleteEditor",
    cellEditorParams: {
      options: [
        "Новая",
        "Назначена",
        "Взята в работу",
        "Исполнена",
        "Отменена",
        "Удалена"
      ]
    }
  } 
];

             this.setState({columnDefs: columnDefs480 });  
            }
if (window.innerWidth > 480) {
  console.log("HELLO bigger")
  const columnDefs = [
    {
      headerName: "id",
      field: "id",
      cellEditor: "simpleEditor"
    },
    {
      headerName: "Содержание",
      field: "content",
      cellEditor: "simpleEditor",
      cellRenderer: 'showMultiline',
      cellClass: 'cell-wrap',
      autoHeight: true
    },
    {
        headerName: "Дата создания",
        field: "datecreate",
        cellEditor: "simpleEditor"
      },
      {
        headerName: "Дата изменения",
        field: "datecreate",
        cellEditor: "simpleEditor"
      }, 
    {
      headerName: "Пациент",
      field: "namepasient",
      cellEditor: "simpleEditor",
      cellRenderer: function(params) {
        console.log ("SEACH VALUE", params.value)
        console.log ("SEACH VALUE 2", params.data.id)
        return '<a href="http://localhost:8081/Kartochka/'+params.data.id+'" target="_blank" rel="noopener">'+ params.value+'</a>'
      }
    },
    {
      headerName: "Автор",
      field: "athor",
      cellEditor: "simpleEditor"
    },
    {
      headerName: "Исполнитель",
      field: "executor",
      cellEditor: "simpleEditor"
    },
    {
        headerName: "Фактическая дата",
        field: "datedone",
        cellEditor: "simpleEditor"
      },
    {
      headerName: "Статус",
      field: "status",
      cellEditor: "autoCompleteEditor",
      cellEditorParams: {
        options: [
          "Новая",
          "Назначена",
          "Взята в работу",
          "Исполнена",
          "Отменена",
          "Удалена"
        ]
      }
    }   
  ];
 this.setState({columnDefs: columnDefs });  
}

          }.bind(this));
      }.bind(this));
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        console.log("DAta Full color",response.data);
        this.setState({
          tutorials: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const rowData = this.state.setRowData;
    return (
        <div   style={{   width: "100%", paddingTop: "60px"}} >
             <h3 style={{ color: '#4B9B00', textAlign: 'center' }}> Список Записок Роль </h3> 
             <div id="myGrid" style={{height: "90%", position: "absolute", width: "90%",  paddingLeft: "15px" }} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={rowData}
            cellRenderer={function(params) {
              return '<a href="https://www.google.com" target="_blank" rel="noopener">'+ params.data.status+'</a>'
            }}
            getRowNodeId={data => data.id}
            onGridReady={this.onGridReady}
            rowClassRules={{
              'red-row': function (params){
                    console.log ("Цвета", params.data.color)
                if (params.data.color === 'red')
                return true;
              },
              'green-row': function (params){
                console.log ("Цвета", params.data.color)
                if (params.data.color === 'green')
                return true;
             },
             'yellow-row': function (params){
              console.log ("Цвета", params.data.color)
              if (params.data.color === 'yellow')
              return true;
           },
            }}
            frameworkComponents={frameworkComponents}
            editType="fullRow"
            suppressClickEdit
          />
            </div>
      </div>
    );
  }
}
export default ZapiskiTableRole;

var gridOptions = {
  columnDefs: [
      { field: "athlete", width: 150 },
      { field: "age", width: 90 },
      { field: "country", width: 150 },
      { field: "year", width: 90 },
      { field: "date", width: 150 },
      { field: "sport", width: 150 },
      { field: "gold", width: 100 },
      { field: "silver", width: 100 },
      { field: "bronze", width: 100 },
      { field: "total", width: 100 },
  ],
};



