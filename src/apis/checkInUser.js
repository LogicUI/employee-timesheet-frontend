import axios from "axios";


const checkInUser = async (userId) => {
    try{
        await axios.post("http://localhost:3000/api/timesheet/checkIn",{
            userId,
        })
        return true;
    }catch(err){
        console.log(err)
        return false
    }
}

export default checkInUser;