import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Header } from '../../components/PageHeaders';
import { Table } from '../../components/Tables/Table';
import { getUsers } from '../../redux/actions/users';
import { getRoles } from '../../redux/actions/roles';
import { setRolesForUser } from '../../redux/actions/rolesForUser';
import getColumns from '../../components/Tables/getColumnsUser'


export const Users = ({ type, id }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { roles } = useSelector((state) => state.roles);
  const { rolesForUsers } = useSelector((state) => state.rolesForUsers);
  const [option, setOption] = useState([])


  const [row, setRow] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => {
    setRow([])
    if (type === 'Profile') {
      users?.map((el) => {
        if (id === el?.role.name) {
          const rowItem = {
            id: el.id,
            lastName: el.lastName,
            firstName: el.firstName,
            userName: el.userName,
            profile: el.role.name,
            password: '****',
            field1: 'lorem',
          }
          setRow((row) => [...row, rowItem])
        }
      })
    } else {
      users?.map((el) => {

        const rowItem = {
          id: el.id,
          lastName: el.lastName,
          firstName: el.firstName,
          userName: el.userName,
          profile: el.role.name,
          password: '****',
          field1: 'lorem',
        }
        setRow((row) => [...row, rowItem])
      })
    }
    setColumns(() => getColumns(option))

  }, [users, option, id])


  const getOptions = () => {
    setOption(() => [])
    roles?.map((el) => setOption((options) => [...options, { label: el.name, id: el.id }]))
  }

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRoles());
  }, [])

  useEffect(() => {
    if (roles) {
      getOptions()
    }
  }, [roles])

  useEffect(() => {
    if (option.length) {
      dispatch(setRolesForUser(option))
    }
  }, [option])

  return (
    <div className={type ? 'wrapper users wrapperProfile' : 'wrapper users'}>
      <div className='container'>
        {type ? (
          <Header name={'Users'} button='Add User to Profile' type={type} id={id} />
        ) : (
          <Header name={'Users'} button='Add New' type={type} />

        )}

        <Table row={row} columns={columns}  type='users'></Table >
      </div>

    </div>
  );
}