import React ,{useState}from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import StarIcon from "@mui/icons-material/Star";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import logo from '../assets/logo.svg'
const LeftTab = () => {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <div>
        <div className='logo' style={{padding: '20px 15px '}}><img src={logo} alt="icon" /></div>
         <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
    
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <StarIcon style={{ color: "#0000008F", fontSize: 25 }} />
        </ListItemIcon>
        <ListItemText primary="List item" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <StarIcon style={{ color: "#0000008F", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText primary="List item" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <StarIcon style={{ color: "#0000008F", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText primary="List item" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <StarIcon style={{ color: "#0000008F", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText primary="List item" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <StarIcon style={{ color: "#0000008F", fontSize: 25 }} />
            </ListItemIcon>
            <ListItemText primary="List item" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    </div>
  )
}

export default LeftTab