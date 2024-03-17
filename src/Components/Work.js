import React, { useState } from 'react';
import axios from 'axios';

const Work = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const handlePost = () => {
        axios.post('https://backcloud-1.onrender.com:10000/register', { name })
            .then(() => {
                alert('Data has been posted');
                setName('');
                getData(); // Refresh data after posting
            })
            .catch(() => {
                alert('Data has not been posted');
            });
    };

    const getData = () => {
        axios.get('https://backcloud-1.onrender.com:10000/sender') // Update URL to match your backend endpoint
            .then(response => {
                setData(response.data);
                alert('Data has been retrieved');
            })
            .catch(() => {
                alert('Data cannot be retrieved');
            });
    };

    return (
        <div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <ol>
                    {data.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ol>
            </div>
            <button onClick={handlePost}>Post</button>
            <button onClick={getData}>Get</button>
        </div>
    );
};

export default Work;