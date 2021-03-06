import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
class TabPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
      }

      componentWillReceiveProps(nextProps) {
        console.log('next props', nextProps.my); 
        console.log('value pass', this.props.my);  
  /*
        if (this.props.my !== nextProps.my) {
            // this.requestData(nextProps.my);
        }
        else    //this.requestData(this.props.my);  */
    }  
    
    render() {
        let photo = this.props.my;
        return (        
            
            <Typography variant="h6" noWrap>
             qwerty  {photo}
          </Typography>
        );
      }

    }
   export default TabPanel;