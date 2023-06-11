import '../App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Home() {
    const [Data, setData] = useState();

    useEffect(() => {
        Loaddata()
    }, [])
    const Loaddata = async () => {
        const response = await axios.get("http://localhost:3001/posts/")
        console.log(response.data)
        setData(response.data)
    }
   
    const deleteUser=async (id)=>{
        if (window.confirm ("Are You sure ?")){
            await axios.delete('http://localhost:3001/posts/'+id)
            Loaddata();
        }
        
    }
    return (
        <>
            <table className="table container">
                <thead>
                    <tr className='heading'>
                        <th scope="col">S.no</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody style={{fontSize:"18px"}}>
                    {
                        Data?.map(({ id, title, author},i) => (
                            <tr key={id}>
                            <td>
                            {i+1+"."}
                            </td>
                                <td >
                                    {id}
                                </td>
                                <td>
                                    {title}
                                </td>
                                <td>
                                    {author}
                                </td>
                                <td>
                                <Link type="button" className="btn btn-primary m-3" to={`/user/view/${id}`}>View</Link>
                                <Link type="button" className="btn btn-success m-3" to={`/user/edit/${id}`}>Edit</Link>  
                                <Link type="button" className="btn btn-danger m-3" onClick={()=>deleteUser(id)}>Delete</Link>
                                </td>
                            </tr>

                        ))}
                </tbody>
            </table>
        </>
    )
}

export default Home
