import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerInfinity } from 'spinners-react';

const MyItem = () => {
    const [inventory, setInventory] = useState()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const updatetock = (id) => {
        navigate(`/inventory/${id}`)
    }

    useEffect(() => {
        const email = user.email
        fetch(`https://stockroom-server.herokuapp.com/myinventory?email=${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                }
                return res.json()
            })
            .then(data => {
                setInventory(data)
            })
    }, [])

    const additem = () => {
        navigate('/additem')
    }
    const deletitem = (id) => {
        fetch(`https://stockroom-server.herokuapp.com/inventory/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json(id))
            .then((json) => {
                if (json.acknowledged) {
                    toast("Delete Successful!")
                    const remaining = inventory.filter(item => item._id !== id)
                    setInventory(remaining)

                }
            });
    }
    return (
        <div className='mb-20'>
            <div className='h-[30vh] flex flex-col mb-4 items-center justify-center stockheader'>
            <h2 className='text-xl md:text-2xl my-5 font-bold text-indigo-400'>My Item : {inventory?.length}</h2>
                    <button onClick={additem} className='border border-blue-600 my-2 mb-4 font-bold p-2'>Add New Item</button>
            </div>


            {
                inventory ? <>
                    

                    <div className="hidden md:flex flex-col md:w-3/4 mx-auto border text-left">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="bg-white border-b">
                                            <tr>

                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Name
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Email
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                    Quantity
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                inventory?.map(item => <tr key={item?._id} className="bg-gray-50 border-b">

                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item?.name}
                                                    </td>
                                                    <td className="text-sm text-blue-500 font-light px-6 py-4 whitespace-nowrap">
                                                        {item?.email}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item?.quantity >= 1 ? item.quantity : <span className='text-red-500'>Out Of Stock</span>}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div className="flex">
                                                            <button onClick={() => { updatetock(item?._id) }} className='border border-indigo-600 p-2 mx-2'>Update Stock</button>
                                                            <button onClick={() => deletitem(item?._id)} className='border border-red-600 p-2'>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>)

                                            }



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:hidden ' >
                        {

                            inventory?.map(item =>
                                <div className='w-full shadow-md p-2 my-2' key={item?._id}>
                                    <h2 className='font-bold text-xl'> Name : {item?.name}</h2>
                                    <h2 className='text-blue-500'>Email {item?.email}</h2>
                                    <h2 >Quantity {item?.quantity}</h2>
                                    <div className="flex justify-center">
                                        <button onClick={() => { updatetock(item?._id) }} className='border border-indigo-600 p-2 mx-2'>Update Stock</button>
                                        <button onClick={() => deletitem(item?._id)} className='border border-red-600 p-2'>Delete</button>
                                    </div>
                                </div>
                            )

                        }
                    </div></>
                    :
                    <SpinnerInfinity className="mx-auto" size={57} thickness={180} speed={100} color="#1A56DB" secondaryColor="rgba(73, 57, 172, 0.44)" />
            }
            <ToastContainer />
        </div>
    );

}
export default MyItem;