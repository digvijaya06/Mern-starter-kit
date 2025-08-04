import React, {useEffect , useState} from 'react';
import axios from 'axios';
function App() {
  const {users, setUsers} = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
}, []);

return (
  <div>
    <h1>Mern Starter Kit</h1>
    {users.map(user => (
      <div key={user._id}>{user.name} - {user.email}</div>
    ))}
  </div>
);
}
 export default App;

