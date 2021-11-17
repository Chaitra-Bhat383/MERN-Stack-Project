import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MyImage from "./images/img4.svg"; { document.body.style = 'background: #A8DADC' }

const App = () => {
    const [upload, setUpload] = useState('');
    const history = useNavigate();
    const submitResume = async(e) => {
        e.preventDefault();
        history("/result");
        const res = await fetch("/upload", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                upload
            })
        });

    }
    return ( < >
        <
        h2 className = "Heading6" > Upload Documents < /h2>    <
        img src = { MyImage }
        alt = "Image can't be displayed"
        className = "img4" / >
        <
        form method = "POST" >
        <
        input type = "text"
        className = "upload1"
        name = "upload"
        value = { upload }
        onChange = {
            (e) => setUpload(e.target.value)
        }
        placeholder = "INSERT RESUME" / >
        <
        button type = "submit"
        className = "build1"
        onClick = { submitResume } > SUBMIT < /button >  < /
        form > <
        />
    );
};

export default App