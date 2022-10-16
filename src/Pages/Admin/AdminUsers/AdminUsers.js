import React from 'react'
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUser, allUser } from '../../../store/user'
import { Form } from 'react-bootstrap';
import { AiOutlineFileDone } from "react-icons/ai";
import adminuser from './adminusers.css'
export default function AdminUsers() {
  const  [isadmin,setIsadmin] = React.useState(true)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllUser())
  },[])

  const all = useSelector(allUser)

  console.log('allUser 1',all)

  const onSubmit = async (id) => {
    try{
      const fields = {
        isadmin,
      }

      console.log('fields',fields)
      console.log('id',id)

      const {data} =  await axios.patch(`/update-user/${id}`, fields)

      console.log('data end',data)
      window.location.reload()
      // console.log('end data',data)

    } catch(err) {
      console.warn('err',err)
      alert('Ошибка при обновлении даных пользователя')
    }
  }
  // onChange={() => setIsadmin((bool) => !bool)}
  const selectedChange = (bool,id) => {
    setIsadmin(!bool)
  }
  return (
    <div className='admin-user-wrapper'>
      {all &&
        all.map((el) => (
          <div key={el._id} className='admin-user-item-wrapper'>
            <p>Ел. пошта: {el.email}</p>
            <p>Імя: {el.name}</p>
            <div className='admin-user-cheked'>
              <p>Адміністратор:</p>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  defaultChecked={el.isadmin}
                  onChange={() => selectedChange(el.isadmin,el._id)}
                />
              </Form>
            <Link to='/admin-users'>
            <AiOutlineFileDone type='submit' onClick={() => onSubmit(el._id)}></AiOutlineFileDone>
            </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
