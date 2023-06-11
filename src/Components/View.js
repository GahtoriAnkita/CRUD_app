import '../App.css';
import React,{useEffect, useState} from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';


function  View()  {
  const [newuser, setnewuser] = useState({
    title: "",
    author:"",
  });

  useEffect(()=>{
    loadUser();
  },[]);
  const reffer = useNavigate();


  const {userId}=useParams();
  // alert (userId)
  const loadUser = async()=>{
    const getData = await axios.get("http://localhost:3001/posts/"+userId);

    setnewuser(getData.data)
  };
  return (
   <>
   <div className="container user-box">
   
   <h1 className="display-4">User Id : {newuser.id}</h1>
   <ul className='lists'>
   <li> Title :  {newuser.title}</li>
   <li>Author :  {newuser.author}</li>
   </ul>
   <Link type="submit" className="btn btn-primary" to="/">Ok</Link>
   </div>
   </>
  )
}

export default View
