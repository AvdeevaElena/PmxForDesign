//import { OLYMPIC_SPORTS, OLYMPIC_COUNTRIES } from "./olympic_lists.js";

export const columnDefs = [
    {
      headerName: "id",
      field: "id",
      cellEditor: "simpleEditor"
    },
    {
      headerName: "Содержание ref",
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
    },
    {
      headerName: "Действия",
      colId: "actions",
      cellRenderer: "actionsRendererWithoutDelete",
      editable: false,
      filter: false,
      minWidth: 220
    }
    
  ];
  
  export const defaultColDef = {
    editable: true,
    resizable: true,
    filter: true,
    floatingFilter: true,
    suppressKeyboardEvent: params => params.editing
  };
  
  function showMultiline() {}
  showMultiline.prototype.init = function(params) {
    //check if the field has a value
    var cellBlank = !params.value;
    if (cellBlank) {
      return null;
    }

    this.ui = document.createElement('div');
    this.ui.innerHTML = '<div style="font-weight: bold;">' +
      params.value+
      "<br/>" +
      params.value+
      "<br/>" +
      '</div>';
  };
  showMultiline.prototype.getGui = function() {
    return this.ui;
  }