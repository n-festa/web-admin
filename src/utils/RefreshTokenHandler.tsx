import {useSession} from 'next-auth/react';
import {useEffect} from 'react';

type Props ={
	setInterval: Function;
}

const RefreshTokenHandler = (props:Props) =>{
	const{ data:session} = useSession();

	// We did set the token to be ready to refresh after 23 hours, here we set interval of 23 hours 30 minutes.
	useEffect(() =>{
		if(!!session){
			const timeRemaining = Math.round(
				(session.access_token_expiry * 1000 -30 *60 * 1000 - Date.now())/
				1000
			);
		} 
	},[session]);

	return null;
}

export default RefreshTokenHandler;