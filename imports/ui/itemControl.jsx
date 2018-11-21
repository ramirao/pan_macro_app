import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';

const itemControl = (props)=>(
<ListItem button onClick={props.show}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText> {props.primary} </ListItemText>
</ListItem>
);

export default itemControl;