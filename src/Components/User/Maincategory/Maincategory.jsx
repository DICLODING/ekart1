import React, { useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function Maincategory() {
  let [data,setData] = useState([])
  async function deleteItem(id){
     let response = await fetch("http://localhost:8000/maincategory/" + id, {
      method : "DELETE",
      headers : {
        "content-type" : "application/json"
      }
     })
     response = await response.json()
  }
  async function getAPIData(){
    let response = await fetch("http://localhost:8000/maincategory",{
      method:"GET",  
      headers: {
        "content-type": "application/json"
      }
     })
     response = await response.json()
     if(response)
     setData(response.slice(1).reverse())
    else
    alert("Something Went Wrong")
  }
  useEffect(()=> {
    getAPIData()
  },[])

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/" className="text-light">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active text-white">Maincategory</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="container-fluid my-3">
     <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <h5 className="bg-primary text-center text-light p-2">Maincategory <Link to="/user/maincategory/create"><i className="fa fa-plus text-light float-end" ></i> </Link></h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) =>{
                  return <tr key ={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link to={`/user/maincategory/update/${item.id}`}> <i className= 'fa fa-edit text-primary' ></i></Link></td>
                    <td><button onClick={()=> deleteItem(item.id)} className="btn text-danger"><i className="fa fa-trash "></i></button></td>

                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
}
