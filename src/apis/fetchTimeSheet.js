import axios from "axios";

const fetchTimeSheet = async (userid) => {
    try{
        const timeSheet = await axios.get(`http://localhost:3000/api/timesheet/${userid}`)
        return timeSheet.data;
    }catch(err){
        console.log(err);
        
    }
}

export default fetchTimeSheet;