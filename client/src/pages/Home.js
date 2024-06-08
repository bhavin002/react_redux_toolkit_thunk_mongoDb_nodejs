import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, getCustomers } from '../features/createAction';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const updateBtn = (id) => {
        navigate(`/update/${id}`);
    }
    useEffect(() => {
        dispatch(getCustomers())
    }, [dispatch])
    const removeBtn = (id) => {
        dispatch(deleteCustomer(id));
        dispatch(getCustomers());
    }
    const customers = useSelector((state) => state.customers.customers.data);
    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                {
                    customers && customers.map((customer) => {
                        return (
                            <div className="col-3 p-2 border my-3" key={customer._id}>
                                <p><span className='lead'>Fname : </span>{customer.fname}</p>
                                <p><span className='lead'>Lname : </span>{customer.lname}</p>
                                <p><span className='lead'>Email : </span>{customer.email}</p>
                                <p><span className='lead'>Pnumber : </span>{customer.pnumber}</p>
                                <p><span className='lead'>NickName : </span>{customer.nickName}</p>
                                <button className='btn btn-danger mx-3' onClick={() => { removeBtn(customer._id) }}>Remove</button>
                                <button className='btn btn-primary' onClick={() => { updateBtn(customer._id) }}>Update</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;