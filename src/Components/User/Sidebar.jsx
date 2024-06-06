import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
    <div className="list-group" >
  <Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true">
    <i className='text fa fa-home '></i><span className='text float-end'>Home</span>

  </Link>
  <Link to="/adminhome/user" className="list-group-item list-group-item-action"><i className='text-primary fa fa-users'></i><span className='text-primary float-end'>Admin</span></Link>

  <Link to="/user/maincategory" className="list-group-item list-group-item-action"><i className='text-primary fa fa-list'></i><span className='text-primary float-end'>Maincategory</span></Link>

  <Link to="/adminhome/subcategory" className="list-group-item list-group-item-action"><i className='text-primary fa fa-list'></i><span className='text-primary float-end'>Subcategory</span></Link>

  <Link to="/adminhome/brand" className="list-group-item list-group-item-action disabled" aria-disabled="true"><i className='text-primary fa fa-list'></i><span className='text-primary float-end'>Brand</span></Link>

  <Link to="/adminhome/product" className="list-group-item list-group-item-action disabled" aria-disabled="true"><i className='text-primary fa fa-list'></i><span className='text-primary float-end'>Products</span></Link>
  
  <Link to="/adminhome/testimonials" className="list-group-item list-group-item-action disabled" aria-disabled="true"><i className='text-primary fa fa-star'></i><span className='text-primary float-end'>Testimonials</span></Link>

  <Link to="/adminhome/checkout" className="list-group-item list-group-item-action disabled" aria-disabled="true"><i className='text-primary fa fa-shopping-bag'></i><span className='text-primary float-end'>Checkouts</span></Link>

  <Link to="/adminhome/contactus" className="list-group-item list-group-item-action disabled" aria-disabled="true"><i className='text-primary fa fa-phone'></i><span className='text-primary float-end'>ContactUs</span></Link>

  <Link to="/adminhome/newsletters" className="list-group-item list-group-item-action disabled" aria-disabled="true"><i className='text-primary fa fa-envelope'></i><span className='text-primary float-end'>Newsletters</span></Link>

</div>
    </>
  )
}
