import React, { useEffect, useState } from "react";
import axios from "axios";


const Read = () => {
  const [APIdata, SetAPIdata] = useState([])
const op = async ()=>{
  const Data = await axios.get("https://62532a1690266e3d0e00ba33.mockapi.io/FakeData").then((res)=> SetAPIdata(res.data) )
}
  useEffect(()=>{
    op()
  },[])

  return (
    <React.Fragment>
      <div className="Hero">
        <h1>
          Read Data Friend List
      </h1>
        <table border="1" className="text-white mt-9 w-4/5 bg-gray-600 text-center hidden md:block'">
// Error on Table 
          <thead>
            <th>NO.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Secret</th>
          </thead>
          <tbody>
            {APIdata.map((res,index)=><tr key={index}>
              <td> {res.id}</td> 
              <td> {res.name}</td> 
              <td> {res.email}</td> 
              <td> {res.number}</td> 
              
            
            </tr>)}
          </tbody>

        </table>
      </div>

    </React.Fragment>
  )
}

export default Read;