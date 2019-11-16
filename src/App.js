import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
    const [ userId, setUserId ] = useState(undefined)
    const [ user, setUser ] = useState();

    const fetchUser = () => axios.get('https://jsonplaceholder.typicode.com/users/' + userId).then((result) => {
        setUser(result.data)
    });

    return (
        <div className="App">
            <div className="child">
                The user is <b>{user ? user.name : ' being fetched'}</b>.
            </div>

            <div className="child">
                <input value={userId} onChange={(event) => setUserId(event.target.value)}></input>
                <button onClick={fetchUser}>Fetch User</button>
            </div>
        </div>
    );
}

export default App;
