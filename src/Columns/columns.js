//import { OLYMPIC_SPORTS, OLYMPIC_COUNTRIES } from "./olympic_lists.js";

export const columnDefs = [
  {
    headerName: "id",
    field: "id",
    cellEditor: "simpleEditor",
    filter: true,
  },
  {
    headerName: "Фамилия",
    field: "nameS",
    cellEditor: "simpleEditor",
    filter: true,
  },
  {
    headerName: "Имя",
    field: "nameN",
    cellEditor: "simpleEditor"
  },
  {
    headerName: "Отчество",
    field: "nameL",
    cellEditor: "simpleEditor"
  },

  {
    headerName: "Дата рождения",
    field: "dateB",
    cellEditor: "simpleEditor",
  },
  {
    headerName: "Дата Поступления",
    field: "dateB",
    cellEditor: "simpleEditor",
    filter: true,
    
  },
  {
    headerName: "Дата Выписки",
    field: "dateV",
    cellEditor: "simpleEditor",
    filter: true,
  },
  {
    headerName: "Действия",
    colId: "actions",
    cellRenderer: "ActionsRendererListPacients",
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
