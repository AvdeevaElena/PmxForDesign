//import { OLYMPIC_SPORTS, OLYMPIC_COUNTRIES } from "./olympic_lists.js";

export const columnDefs = [
    {
      headerName: "id",
      field: "id",
      cellEditor: "simpleEditor"
    },
    {
      headerName: "Содержание",
      field: "content",
      cellEditor: "simpleEditor"
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
      cellEditor: "simpleEditor"
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
      cellRenderer: "actionsRenderer",
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
  