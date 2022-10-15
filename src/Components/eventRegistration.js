import React, { useState } from 'react';
import '../Styles/event.css'
import { ref, push, child, update } from "firebase/database";
import database from './firebase';
const EventRegistration = () => {
    const [Name, setName] = useState(null);
    const [collegeName, setcollegeName] = useState(null);
    const [email, setEmail] = useState(null);
    const [regNo, setregNo] = useState(null);
    const [mobileNo, setmobileNo] = useState(null);
    const [uploadId,setuploadId] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "Name") {
            setName(value);
        }
        if (id === "collegeName") {
            setcollegeName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "regNo") {
            setregNo(value);
        }
        if (id === "mobileNo") {
            setmobileNo(value);
        }
        if(id === "uploadId"){
            setuploadId(value);
        }

    }
    const handleSubmit = () => {
        console.log(Name, collegeName, email, regNo, mobileNo);
        let object = {
            Name: Name,
            collegeName: collegeName,
            email: email,
            regNo: regNo,
            mobileNo: mobileNo,
            uploadId: uploadId,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = object
        return update(ref(database), updates);
    }

    return (
        <div className="form">

            <div className="username">
                <h1>Name</h1>
                <input type="text" value={Name} onChange={(e) => handleInputChange(e)} id="Name" placeholder="First Name" />
            </div>
            <div className="collegeName">
                <h1>College Name</h1>
                <input type="text" id="collegeName" value={collegeName} onChange={(e) => handleInputChange(e)} placeholder="collegeName" />
            </div>
            <div className="email">
                <h1>Email</h1>
                <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
            </div>
            <div className="regNo">
                <h1>regNo</h1>
                <input type="number" id="regNo" value={regNo} onChange={(e) => handleInputChange(e)} placeholder="regNo" />
            </div>
            <div className="mobileNo">
                <h1>Mobile Number</h1>
                <input type="number" id="mobileNo" value={mobileNo} onChange={(e) => handleInputChange(e)} placeholder="Confirm regNo" />
            </div>
            <div className="Id">
                <h1>College Id</h1>
                <input type="file" id="uploadId" value = {uploadId} onChange={(e) =>handleInputChange(e)}/>

            </div>
            <br></br><br></br>
            <div>
                <button className="glow-on-hover" onClick={() => handleSubmit()} type="submit" >Register</button>
            </div>
        </div>

    )
}

export default EventRegistration;
