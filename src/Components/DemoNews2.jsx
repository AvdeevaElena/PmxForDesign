import React from 'react';
import axios from 'axios';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogTitle from '@material-ui/core/DialogTitle';

import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const bigDiv =  {background: 'green'};
const leftDiv = {background: '#ced9eb', float: 'left', width: '50%',  display: "flex"};
const rightDiv = {background: '#d1b6ae', float: 'right', width: '50%', display: "flex"};
const centered = {float: 'left', textAlign: 'left', paddingLeft: '0px'};
        const  rightCorner = {float: 'left',  position: 'relative', textAlign: 'left', paddingLeft: '0px'};
         const container = { position: 'relative', color: 'black', textAlign: 'left', float: 'left', paddingLeft: '0px'};
class DemoNews2 extends React.Component {
/*
    state = {
      newsList: [],
      zapiskiList: [],
      zayvkiList: [],
      value: 0,
      setValue: 1,
      expanded: true,
      open: false,
    
    };
*/
    constructor() {
      super();
      this.state = {
        newsList: [],
      zapiskiList: [],
      zayvkiList: [],
      value: 0,
      setValue: 1,
      expanded: true,
      open: false,
      };
    }


    handleExpandClick = () => {
      this.state.setExpanded(!this.state.expanded);
    };
    handleChangeZayavki = (panel) => (event, isExpanded) => {
      this.setState( {expanded: isExpanded ? panel : false});
      };
 

    handleClickOpen123 = () => {
      console.log ("TEST TEST open", this.state.open)
     
     if (this.state.open == false)
     { this.setState( {open: true}, () => {
        //call back function of set state you could check here updated state
        console.log("answer", this.state.open)
      });
     }

  else
     { this.setState( {open: true}, () => {
      //call back function of set state you could check here updated state
      console.log("answer", this.state.open)
    });
   }     
      };

      handleClose123 = () => {
        console.log ("TEST TEST close", this.state.open)
        this.setState( {open: false}, () => {
          //call back function of set state you could check here updated state
          console.log("answer", this.state.open)
        });
    
      };

   handleChange = (event, newValue) => {
    this.a11yProps(newValue);
   // console.log ("val was", this.state.value)
    this.setState({ value: newValue });
   // console.log ("val become", this.state.value)
  };
  a11yProps(index) {
    return {
     id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
        componentDidMount() {
          axios.get("https://avdeevaelena.github.io/json/spisokZayavok.json")
          .then(res => {
            const zayvkiList = res.data;
            this.setState({ zayvkiList });
          }) 

            axios.get(`https://avdeevaelena.github.io/json/spisokNews.json`)
            .then(res => {
              const newsList = res.data;
              this.setState({ newsList });
            }) 
            axios.get(`https://avdeevaelena.github.io/json/spisokZapisok.json`)
            .then(res => {
              const zapiskiList = res.data;
              this.setState({ zapiskiList });
            }) 
        } 
        render() {    
              const tabList = this.state.newsList.map(s => {
                return (  
                     <Tab label={s.title} {...this.a11yProps(s.id)} /> 
                );
              });

              const tabPanel = this.state.newsList.map(s => {
              return (
                <div
                role="tabpanel"
                hidden={this.state.value+1 != s.id}
                id={`vertical-tabpanel-${s.id}`}
               // aria-labelledby={`vertical-tab-${s.id}`}
              >
                {this.state.value+1 == s.id && (
                  <Box p={3}>
                    <Typography>{s.title}</Typography>
                    <Typography>{s.content}</Typography>
                    <Typography>{s.date}</Typography>
                  </Box>
                )}
              </div>
                ) 
              }
              );
      
              const zapiskiByCorpusLeft = this.state.zapiskiList.map(s => {
                if (s.corpus == 'left' && s.color == 'green')
                return (  
                  <Card bordered={true}
                 
                  style={{ backgroundColor:'#b6dbc0',display: 'flex',  marginRight:5, marginBottom:5, marginTop:5  }} >
               <CardActionArea>
            <CardContent>
            <Typography component="p" style={{textAlign: 'right'}}>
                {s.totalZapisok}
                </Typography>
              <Typography gutterBottom variant="h5" component="h2">
              {s.namepasient}
              </Typography>
              <Button  size="small"  onClick={this.handleClickOpen123}>
              ...
          </Button>
        </CardContent>
        </CardActionArea>
        <Dialog 
        open={this.state.open }>
        <DialogTitle>
          Содержание записки
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              Пациент: {s.namepasient}
          </Typography>
          <Typography gutterBottom>
          {s.content}
          </Typography>
          <Typography gutterBottom>
          {s.satus} {s.datecreate} 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose123} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
           </Card>   
               );  
               if (s.corpus == 'left' && s.color == 'red')
               return (  
                <Card bordered={true}
                      style={{ backgroundColor:'#f59290',display: 'flex',  marginRight:5, marginBottom:5, marginTop:5  }} >
                  <CardActionArea>
                  <CardContent>
            <Typography component="p" style={{textAlign: 'right'}}>
                {s.totalZapisok}
                </Typography>
              <Typography gutterBottom variant="h5" component="h2">
              {s.namepasient}
              </Typography>
              <Button  size="small"  onClick={this.handleClickOpen123}>
             ...
          </Button>
        </CardContent>
        </CardActionArea>
        <Dialog 
        open={this.state.open }>
        <DialogTitle>
          Содержание записки
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              Пациент: {s.namepasient}
          </Typography>
          <Typography gutterBottom>
          {s.content}
          </Typography>
          <Typography gutterBottom>
          {s.satus} {s.datecreate} 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose123} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    
           </Card>   
             );  
             });  

             const zapiskiByCorpusRight = this.state.zapiskiList.map(s => {
              if (s.corpus == 'right' && s.color == 'green')
              {  return (  
                <Card bordered={true}
                style={{ backgroundColor:'#b6dbc0',display: 'flex',  marginRight:5, marginBottom:5, marginTop:5  }} >
           <CardActionArea>
                  <CardContent>
            <Typography component="p" style={{textAlign: 'right'}}>
                {s.totalZapisok}
                </Typography>
              <Typography gutterBottom variant="h5" component="h2">
              {s.namepasient}
              </Typography>
              <Button  size="small"  onClick={this.handleClickOpen123}>
              ...
          </Button>
        </CardContent>
        </CardActionArea>
        <Dialog 
        open={this.state.open }>
        <DialogTitle>
          Содержание записки
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              Пациент: {s.namepasient}
          </Typography>
          <Typography gutterBottom>
          {s.content}
          </Typography>
          <Typography gutterBottom>
          {s.satus} {s.datecreate} 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose123} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
            </Card>   
              );  
              }
              if (s.corpus == 'right')
              {  return (  
                <Card bordered={true}
                  style={{ backgroundColor:'#f59290',display: 'flex',  marginRight:5, marginBottom:5, marginTop:5  }} >
                <CardActionArea>
                  <CardContent>
            <Typography component="p" style={{textAlign: 'right'}}>
                {s.totalZapisok}
                </Typography>
              <Typography gutterBottom variant="h5" component="h2">
              {s.namepasient}
              </Typography>
              <Button  size="small"  onClick={this.handleClickOpen123}>
              ...
          </Button>
        </CardContent>
        </CardActionArea>
        <Dialog 
        open={this.state.open }>
        <DialogTitle>
          Содержание записки
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              Пациент: {s.namepasient}
          </Typography>
          <Typography gutterBottom>
          {s.content}
          </Typography>
          <Typography gutterBottom>
          {s.satus} {s.datecreate} 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose123} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
               </Card>   
              );  
              }
            }); 
            
            const showZayvkiList = this.state.zayvkiList.map(s => {
              return (  
          <Accordion expanded={this.expanded } onChange={this.handleChangeZayavki(s.date)}
           >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography style={{fontSize: 'theme.typography.pxToRem(15)',
            flexBasis: '33.33%',flexShrink: 0, color: 'grey'}}>{s.status}</Typography>
            <Typography style={{ fontSize: 'theme.typography.pxToRem(15)'}}>
            {s.zagolovok}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Box p={3}>
            <Typography>
            {s.content}
            </Typography>
            <Typography>
            {s.date}
            </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
              );
            });      

      return (
        <div>
              <Paper style={{marginTop:60 }} elevation={1}>
        <Typography variant="h5" component="h3"
        style={{ backgroundColor: '#f5f5f5', textAlign: 'center' }} >
          Новости
        </Typography>
                 <div style={{ overflow: 'revert', flexGrow: 1, backgroundColor: 
                 'white',display: 'flex', height: 224, marginRight:5 }}>           
                <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={this.state.value}
                      onChange={this.handleChange}
                      aria-label="Vertical tabs example"
                      style={{overflow: 'revert',borderRightColor: 'grey', borderRight:'1px solid'}}
                      //className={classes.tabs}
                              >
                  {tabList}
                </Tabs>
                {tabPanel}    
              </div>  
        </Paper>        
         <Paper style={{marginTop:10 }} elevation={1}>
        <Typography variant="h5" component="h3"
        style={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
          Записки по корпусам
        </Typography>
               <div  style={bigDiv} > 
                <div style={leftDiv}> 
                 {zapiskiByCorpusLeft}
                </div>
                <div style={rightDiv}> 
                   {zapiskiByCorpusRight}
                </div>
               </div>
      </Paper> 
      <Paper style={{marginTop:10 }} elevation={1}>
        <Typography variant="h5" component="h3"
        style={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
          Заявки
        </Typography>
        <div>
         {showZayvkiList}
    </div>
      </Paper> 
           
          </div>      
            )
      }


}
export default DemoNews2;