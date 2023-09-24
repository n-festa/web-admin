import axios from "axios";

import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../utils/constant";

const AdminApi = {
	register: async(username, email, password) =>{
		try{
			const response = await axios.post(
				`${SERVER_LOCAL_URL}/signUp`,
				JSON.stringify({ user: { username, email, password } }),
		        {
		          headers: {
		            "Content-Type": "application/json",
		          },
		        }
			);
			return response
		}catch(error){
			return error.response;
		}
	}
}	

export default AdminApi;