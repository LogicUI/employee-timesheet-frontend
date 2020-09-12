import axios from "axios";


const fetchUsers = async () => {
    try {
      const users = await axios.get("http://localhost:3000/api/users/1");
      return users.data;
    } catch (err) {
      console.log(err);
    }
  };
  


export default fetchUsers;