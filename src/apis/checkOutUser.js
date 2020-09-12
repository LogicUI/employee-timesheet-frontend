import axios from "axios";

const checkOutUser = async (userId) => {
    try {
        await axios.post("http://localhost:3000/api/timesheet/checkOut",{
            userId,
            timeOut:3000
        })
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
}

export default checkOutUser;