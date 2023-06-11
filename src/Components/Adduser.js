import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Adduser() {
  const [NewData, setNewData] = useState(
    {
      id: "",
      title: "",
      author: ""
    }
  );
  const { id, title, author } = NewData;

  const handleChange = (e) => {
    setNewData({ ...NewData, [e.target.name]: e.target.value })
    //  console.log(e.target.value)
  }
  const reffer = useNavigate();


  const handleData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/posts",NewData);
    reffer("/")
  }


  return (
    <>
      <div className="container user-box">
      <h2 style={{marginTop:'30px'}}>To Add User Information....</h2>
      <form className='form-box' onSubmit={(e) => handleData(e)}>
          <div className="mb-3">
            <input type="number" value={id} className="form-control" name="id" aria-describedby="idhelp" style={{ width: "400px", marginLeft: "200px" }} placeholder='enter your id' onChange={(e) => handleChange(e)} />
            <div id="IdHelp" className="form-text">We'll never share your Id with anyone else.</div>
          </div>
          <div className="mb-3">
            <input type="text" value={title} className="form-control" name="title" placeholder='enter title name' style={{ width: "400px", marginLeft: "200px" }} onChange={(e) => handleChange(e)} />
          </div>
          <div className="mb-3">
            <input type="text" value={author} className="form-control" name="author" placeholder='enter author' style={{ width: "400px", marginLeft: "200px" }} onChange={(e) => handleChange(e)} />
          </div>
          <button type="submit" className="btn btn-primary my-4" >Add user</button>
        </form>
      </div>
    </>
  )
}

export default Adduser
