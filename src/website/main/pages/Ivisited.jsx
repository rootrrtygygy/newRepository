import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth_User from '../../authentication/Auth_User';
import { useEffect } from 'react';

const Ivisited = () => {
  const {http,user,token,logout}=Auth_User();
  const[ivisit,SetIvisit ] =useState();
  const[isShow,setcolor ] =useState(false);

  // useEffect(()=>{
  //   http.get(`/i_visited/8`).then((res)=>{
  //     console.log("i",res.data);
  //     SetIvisit(res.data);
  //   })
  // },[user.id, http]);

   
   return (
     <div style={{ marginTop: "200px" }}>
       <main className="main__content_wrapper">
         <div className="container">
           <h4 className="text-center p-4">I visited Profiles</h4>
           <div className="row">
             <div className="col-md-12 col-12">
               <div className="text-center mt-2 mb-2">
               
                 <Link to={"/dashboard"}> 
                 <button className=' text-white ' style={{ marginTop: "30px",marginBottom:"20px" , height: "30px", backgroundColor: isShow ? "Red" : "white", color: isShow ? "white" : "Red", borderColor: "Red", borderRadius: "5px" }} onMouseEnter={() => setcolor(true)} onMouseLeave={() => setcolor(false)} >Go Back</button>
                 </Link>
                   
                 
               </div>
               <div className="table-responsive">
                 <table className="table table-striped table-bordered table-hover">
                   <thead>
                     <tr>
                       <th>Profile Photo</th>
                       <th>Name</th>
                       <th>Date of Birth</th>
                    
                       <th className="text-end">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                      <td>hi</td>
                      <td>hi</td>
                      <td>hi</td>
                      <td>hi</td>
                     </tr>
                     <tr>
                      <td>hi</td>
                      <td>hi</td>
                      <td>hi</td>
                      <td>hi</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <div className="row mb-50 mt-50">
                 <div className="col-md-2 offset-sm-5 ">
                   
                 </div>
               </div>
             </div>
           </div>
         </div>
       </main>
     </div>
   );
}

export default Ivisited