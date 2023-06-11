import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {
    const {userId}=useParams();
    // alert(userId);
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
        await axios.put("http://localhost:3001/posts/"+userId,NewData);
        reffer("/")
      }
    
       const handleLoad = async (e)=>{
       const getData = await axios.get("http://localhost:3001/posts/"+userId ,NewData)
       setNewData(getData.data)
       }
       useEffect(() => {
        handleLoad();
    }, [])
    
      return (
        <>
          <div className="container user-box" >
          <h3 style={{marginTop:"20px"}}>Edit your Data Below....</h3>
            <form className='form-box' onSubmit={(e) => handleData(e)}>
              <div className="mb-3">
                <input type="number" value={id} className="form-control" name="id" aria-describedby="idhelp" style={{ width: "400px", marginLeft: "200px" }} placeholder='enter your id' onChange={(e) => handleChange(e)} />
              </div>
              <div className="mb-3">
                <input type="text" value={title} className="form-control" name="title" placeholder='enter title name' style={{ width: "400px", marginLeft: "200px" }} onChange={(e) => handleChange(e)} />
              </div>
              <div className="mb-3">
                <input type="text" value={author} className="form-control" name="author" placeholder='enter author' style={{ width: "400px", marginLeft: "200px" }} onChange={(e) => handleChange(e)} />
              </div>
              <button type="submit" className="btn btn-primary my-4" >Edit</button>
            </form>
          </div>
        </>
      )
}

export default Edit
