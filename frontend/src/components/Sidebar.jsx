import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import WatchIcon from '@mui/icons-material/Watch';
import TocIcon from '@mui/icons-material/Toc';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import HeadsetIcon from '@mui/icons-material/Headset';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
import CableIcon from '@mui/icons-material/Cable';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';
export default function Sidebar() {

    const FlyoutLink = ({ children, href}) => {
        const [open1, setOpen1] = React.useState(false);
      
      
        return (
          <div
            onMouseEnter={() => setOpen1(true)}
            onMouseLeave={() => setOpen1(false)}
            className="relative w-fit h-fit"
          >
            <a href={href} className="relative text-black">
              {children}
              <span
                style={{
                  transform: open1 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: open1 ? "left" : "right", 
                  height: "0.05rem"
                }}
                className="absolute -bottom-0 -left-0 -right-1 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out"
              />
            </a>
          </div>
        );
      };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem key={"HOME"} disablePadding>
            <ListItemButton>
               <ListItemIcon>
                {<Home />}
              </ListItemIcon> 
              <Link to={"/"}><FlyoutLink> HOME </FlyoutLink></Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"SMART WATCHES"} disablePadding>
            <ListItemButton>
               <ListItemIcon>
                {<WatchIcon />}
              </ListItemIcon> 
              <Link to={"/smartwatch"}><FlyoutLink>SMART WATCHES</FlyoutLink></Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"NEW LAUNCHES"} disablePadding>
            <ListItemButton>
               <ListItemIcon>
                {<FiberNewIcon />}
              </ListItemIcon> 
              <Link to={"/newlaunches"}><FlyoutLink><span className="label">NEW LAUNCHES</span></FlyoutLink></Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"EARPHONES"} disablePadding>
            <ListItemButton>
                
               <ListItemIcon>
                {<HeadsetIcon />}
              </ListItemIcon> 
              <Link to={"/earphones"}> <FlyoutLink><span className="label">EARPHONES</span></FlyoutLink></Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"SPEAKERS"} disablePadding>
            <ListItemButton>
                
               <ListItemIcon>
                {<SpeakerGroupIcon />}
              </ListItemIcon> 
              <Link to={"/speakers"}> <FlyoutLink><span className="label">SPEAKERS</span></FlyoutLink></Link>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key={"ACCESSORIES"} disablePadding>
            <ListItemButton>
                
               <ListItemIcon>
                {<CableIcon />}
              </ListItemIcon> 
              <Link to={"/accessories"}><FlyoutLink><span className="label">ACCESSORIES</span></FlyoutLink></Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"BULK ORDERS"} disablePadding>
            <ListItemButton>
                
               <ListItemIcon>
                {<LocalShippingIcon />}
              </ListItemIcon> 
              <FlyoutLink><span className="label"><Link to={"/bulkorder"}>BULK ORDERS</Link></span></FlyoutLink>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"BLOGS"} disablePadding>
            <ListItemButton>
                
               <ListItemIcon>
                {<RssFeedIcon />}
              </ListItemIcon> 
              <FlyoutLink>BLOGS</FlyoutLink>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><TocIcon style={{fontSize:"40px", color:"#303030d6"}}></TocIcon></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        <button style={{position:"fixed", bottom:"15px", left:"15px", fontSize:"13px"}}><FlyoutLink>ELECTRONIC JUNCTION</FlyoutLink></button>
      </Drawer>
    </div>
  );
}