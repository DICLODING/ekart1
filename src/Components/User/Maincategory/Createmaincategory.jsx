import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function CreateMaincategory() {
  let name = useRef("");
  let [message, setMessage] = useState("");
  let [show, setShow] = useState(false);
  let navigate = useNavigate();
  function getInputData(e) {
    setShow(false);
    name.current = e.target.value;
  }
  async function postData(e) {
    e.preventDefault();
    if (name.current.length == 0) {
      setShow(true);
      setMessage("Maincategory Name Must Required");
    } else if (name.current.length < 3) {
      setShow(true);
      setMessage("Maincategory Name Must be Greater Then or Equal to 3");
    } else if (name.current.length > 15) {
      setShow(true);
      setMessage("Maincategory Name Must Be Less Then or Equal to 20");
    } else {
      let response = await fetch("http://localhost:8000/maincategory", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      response = await response.json();
      var item = response.slice(1).find((x) => x.name === name.current);
      if (item) {
        setShow(true);
        setMessage("MainCategory Already exist");
      } else {
        response = await fetch("http://localhost:8000/maincategory", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name: name.current }),
        })
        response = await response.json()
        if(response)
        navigate("/user/maincategory")
      else
        alert("Something Went Wrong")
      }
    }
  }
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
            <h5 className="bg-primary text-center text-light p-2">
              Maincategory{" "}
            </h5>
            <form onSubmit={postData}>
              <div className="col-md-9">
                <h5 className="mb-3">
                  <label>
                    Name <span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={getInputData}
                    className="form-control"
                    placeholder="Maincategory"
                  />
                  {show ? <p className="text-danger">{message}</p> : ""}
                </h5>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary text-light w-100 p-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
