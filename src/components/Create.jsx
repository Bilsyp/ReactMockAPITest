import React, { useState } from "react";
import axios from "axios";




const Create = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState('');
  const [checkbox, SetCheckbox] = useState(false);

  const postData = ()=>{
    const url = "https://62532a1690266e3d0e00ba33.mockapi.io/FakeData"
     axios.post(url, {
            name,
            email,
            number,
            checkbox
        })
    alert("Data Berhasil Ditambahkan")
  }
  return (
    <React.Fragment>
      <div className="Hero">
        <h1 className="text-5xl">
          Create
      </h1>
        <form className="p-3 bg-gray-400 w-4/5 md:w-3/5 mt-5">
          <div className="input-group">
            <label for="name">
              Name
        </label>
            <input required type="text"
              onChange={(e) => {
                SetName(e.target.value)
              }}
              placeholder="Name..." />
          </div>
          <div className="input-group">
            <label for="email">
              Email
        </label>
            <input onChange={(e) => {
              SetEmail(e.target.value)
            }}
              required type="email" placeholder="Email..." />
          </div>
          <div className="input-group">
       <label for="number">
              No.Phone
        </label>
            <input required type="number" onChange={(e) => {
              SetNumber(e.target.value)
            }} placeholder="No.Phone..." />
          </div>
          <div className="input-group">
            <label className="inline" for="number">
              Secret Data
        </label>
            <input required className="w-8 mb-5" type="checkbox" placeholder="No.Phone..." onChange={(e) => {
              SetCheckbox(!checkbox)
            }} />
          </div>
          <button type="submit" onClick={postData} className="w-full p-2 bg-blue-700 hover:bg-blue-500">
            Send
          </button>

        </form>
      </div>
    </React.Fragment>
  )
}

export default Create;