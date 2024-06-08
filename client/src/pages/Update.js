import React, { useEffect, useState } from 'react'
import "../style/Form.css";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer, updateCustomer } from '../features/createAction';

const Update = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const customer = useSelector((state) => state.customers.customer || []);
    const [info, setInfo] = useState({
        fname: '',
        lname: '',
        email: '',
        pnumber: '',
        nickName: ''
    })
    useEffect(() => {
        if (customer?.data) {
            setInfo({
                fname: customer.data.fname,
                lname: customer.data.lname,
                email: customer.data.email,
                pnumber: customer.data.pnumber,
                nickName: customer.data.nickName,
            });
        }
    }, [customer]);

    useEffect(() => {
        dispatch(getCustomer(id))
    }, [dispatch, id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const updateCustome = (e) => {
        e.preventDefault();
        const { fname, lname, email, pnumber, nickName } = info;
        if (!fname || !lname || !email || !pnumber || !nickName) {
            toast.error("All Fields Are Required");
        } else {
            dispatch(updateCustomer({ id: id, customer: info }));
            navigate("/");
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <form className="form border m-4 p-5" autoComplete='off'>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='logo'>Create Customer</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='fname'>Enter your Fname</label>
                            <input type="text" className="form-control" onChange={handleInputChange} value={info.fname} name='fname' id='fname' placeholder="First name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='lname'>Enter your Lname</label>
                            <input type="text" className="form-control" onChange={handleInputChange} value={info.lname} name='lname' id='lname' placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='email'>Email</label>
                            <input type="email" className="form-control" onChange={handleInputChange} value={info.email} name='email' id='email' placeholder="Email address" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='nickName'>Pnumber</label>
                            <input type="text" className="form-control" onChange={handleInputChange} value={info.pnumber} name='pnumber' id='pnumber' placeholder="Pnumber" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor='nickName'>NickName</label>
                            <input type="text" className="form-control" onChange={handleInputChange} value={info.nickName} name='nickName' id='nickName' placeholder="nickName" />
                        </div>
                    </div>
                </div>
                <button className='btnRegister mt-3 w-100' onClick={updateCustome}>Update</button>
            </form>
            <Toaster />
        </div>
    )
}

export default Update;