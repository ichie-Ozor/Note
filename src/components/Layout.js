import React from 'react'
import { makeStyles } from '@mui/styles'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useLocation, useNavigate } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles({
    page : {
        background : '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    }, 
    active: {
        background: '#f4f4f4'
    }
})



export default function Layout({children}) {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()   //This is used to locate the active page or object
    const menuItems = [
        {
            text: 'My Note',
            icon: <SubjectOutlinedIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
            path: '/create'
        }
    ]


  return (
    <div className={classes.root}>
        {/* app bar */}
        {/* side drawer */}
        <Drawer
           className={classes.drawer}
           variant='permanent'
           anchor='left'
           classes={{paper: classes.drawPaper}}
        >
            <div>
                <Typography variant='h5'>
                    My Notes
                </Typography>
            </div>

           {/* list/link */}
           <List>
            {menuItems.map(item => (
                <ListItem
                button   //this prop helps it to behave like a button
                key={item.text}
                onClick={() => navigate(item.path)}
                // className={location.pathname === item.path ? classes.active : null}  not working
                style={{background:location.pathname === item.path ? '#f4f4f4' : null}}
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                </ListItem>
            ))}
           </List>
        </Drawer>
        <div className={classes.page}>
            { children }
        </div>
    </div>
  )
}
