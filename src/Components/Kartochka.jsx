import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CommentIcon from '@material-ui/icons/Comment'
import 'antd/dist/antd.css';
import Typography from '@material-ui/core/Typography';

const sliderStyle = {
  position: "relative",
  width: "100%"
};

class Kartochka extends React.Component {
    state = {
      infoList: []
      };
        componentDidMount() {
          axios.get(`https://avdeevaelena.github.io/json/32.json`)
          .then(res => {
            const infoList = res.data;
            this.setState({ infoList });
          }) 
          }
    render() {   
        const classes = makeStyles((theme) => ({
            root: {
              width: '100%',
              maxWidth: "100%",
              paddingTop: 50,
              backgroundColor: theme.palette.background.paper,
            },
          })); 
          const rows = this.state.infoList;
          var data = rows[Object.keys(rows)[0]];
         let userName = rows.filter(item => item.id == 1).map(list => list.nameN);
         let userFamily = rows.filter(item => item.id == 1).map(list => list.nameS);
         let userFatherName = rows.filter(item => item.id == 1).map(list => list.nameL);
         let userBirth = rows.filter(item => item.id == 1).map(list => list.dateB);
         let userIn = rows.filter(item => item.id == 1).map(list => list.dateP);
         let userOut = rows.filter(item => item.id == 1).map(list => list.dateV);
        return (
          <div style={{   marginTop:60,  width: '100%' }} >
          <Typography variant="h5" component="h3"
                  style={{ backgroundColor: '#f5f5f5', textAlign: 'center' }} >
                    Личная карточка пациента & Записки по пациенту
            </Typography>
                      <div style={{ float: 'left',  width: '50%' }}> 
                      <Typography variant="h6" component="h6"
                  style={{ backgroundColor: '#f5f5f8', textAlign: 'center',  color: '#4B9B00'  }} >
                    Личная карточка пациента
            </Typography>      
                      <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
            <ListItemText primary= {userName} secondary="Имя"/>
            </ListItem>
            <Divider />
            <ListItem button > 
            <ListItemText primary= {userFamily} secondary="Фамилия" />
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemText primary= {userFatherName}  secondary="Отчество" />
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemText primary= {userBirth}  secondary="Дата рождения" />
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
              <Checkbox
                edge="start"
              // checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText primary= {userIn} secondary="Дата поступления"/>
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
              <Checkbox
                edge="start"
              // checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText primary= {userOut} secondary="Дата выписки"/>
            </ListItem>
            <Divider />
            </List>
            </div>
            <div style={{ float: 'right',  width: '50%' }}> 
            <Typography variant="h6" component="h6"
        style={{ backgroundColor: '#f5f5f5', textAlign: 'center',  color: '#4B9B00'  }} >
          Записки по пациенту </Typography>        
            <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
            <ListItemText children ="" primary= "Какой-нибудь текст Поздравить с Днем рождения" secondary="Ответственное лицо- Иванов П.П." secondary="Дата: 12.12.2013 Отв. лицо - Петров П.П."/>
            </ListItem>
            <Divider />
            <ListItem button > 
            <ListItemText children ="" primary= "Какой-нибудь текст Поздравить с Днем рождения" secondary="Ответственное лицо- Иванов П.П." secondary="Дата: 12.12.2013 Отв. лицо - Петров П.П." />
            <CommentIcon />
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemText children ="" primary= "Какой-нибудь текст Поздравить с Днем рождения" secondary="Ответственное лицо- Иванов П.П." secondary="Дата: 12.12.2013 Отв. лицо - Петров П.П."/>
            </ListItem>
            <Divider />
            </List>
            </div>
          </div>   
        )
  }
   }
   export default Kartochka;