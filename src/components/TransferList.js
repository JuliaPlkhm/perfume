import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'
import arrow3 from '../assets/arrow3.png'
import arrow4 from '../assets/arrow4.png'
import page from '../assets/page.png'
import ListItemButton from '@mui/material/ListItemButton';
import { Scrollbar } from "react-scrollbars-custom";
import { postPage } from "../redux/actions/roles";
import { deletePage } from "../redux/actions/roles";
import {  useDispatch } from "react-redux";



function not(a, b) {
  return a?.filter((value) => b?.indexOf(value) === -1);
}

function intersection(a, b) {
  return a?.filter((value) => b?.indexOf(value) !== -1);
}

function rightPermission(a, b) {
    return a?.filter((value) => b?.findIndex((el)=> el.id === value.id) == -1);
  }

export  function TransferList({permissions, allPermissions, id}) {
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(permissions);
  const [right, setRight] = useState([]);

  const [selectedPermission, setSelectedPermission] = useState();
  const dispatch = useDispatch();

  
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
  


  useEffect(() => {

    setLeft(permissions)
    const right = rightPermission(allPermissions, permissions)

    setRight(right)
  }, [permissions])


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(checked)
  };

  const handleAllRight = () => {
    left?.map((el)=>{
      const page ={
        roleId: id,
        permissionId: el.id
      }
      dispatch(deletePage(page))
    })
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    leftChecked?.map((el)=>{
      const page ={
        roleId: id,
        permissionId: el.id
      }
      dispatch(deletePage(page))
    })
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    rightChecked?.map((el)=>{
      const page ={
        roleId: id,
        permissionId: el.id
      }
      dispatch(postPage(page))
    })
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  
  const handleAllLeft = () => {
    right?.map((el)=>{
      const page ={
        roleId: id,
        permissionId: el.id
      }
      dispatch(postPage(page))
    })
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items, header) => (
    <>
      <div className='permissions__header' >{header}</div>
      
      <List  component="div" role="list" className='permissions__list'>
      <Scrollbar style={{ width: '100%', height: '286px' }}
      trackYProps={{ className: "permission__scroll" }}>
        {items?.length ? (items.map((el) => {

          return (
            <ListItemButton
            className='list__item'
              key={el.id}
              role="listitem"
              button
              selected={checked.indexOf(el) !== -1}
              onClick={ handleToggle(el)}
            >
              <ListItemText id={el.id} primary={el.name} />
            </ListItemButton>
          );
        })) : (
          <img src={page} style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}/>
        )}
        <ListItem />
      </Scrollbar>

      </List>
    </>
  );

  return (
    <Grid container  className = 'permissions__transferList' justifyContent="center" alignItems="center">
       <Grid item className= 'transferList__item'>{customList(left, 'Selected')}</Grid> 
      <Grid item className= 'transferList__buttons'>
        <Grid container  direction="column" >
        <Button
          className='permissions__button'
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            aria-label="move selected left"
          >
          <img src={arrow1}/>
          </Button>
          <Button
          className='permissions__button'
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            aria-label="move all left"
          >
           <img src={arrow2}/>
          </Button>
          
          <Button
          className='permissions__button'
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            aria-label="move selected right"
          >
            <img src={arrow3}/>
          </Button>
          <Button
          className='permissions__button'
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            aria-label="move all right"
          >
          <img src={arrow4}/>
          </Button>
          
        </Grid>
      </Grid>
     <Grid item className= 'transferList__item'>{customList(right, 'Availabel')}</Grid>

    </Grid>
  );
}