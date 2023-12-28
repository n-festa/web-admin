import axios from 'axios';
import jwtDecode from 'jwt-decode'
import NextAuth, { NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Provider } from 'next-auth/providers/index';


async function refreshAccessToken(token: any) {
  
}

const providers: Provider[] = [
	
];


export const authOptions: NextAuthOptions ={
	 providers,
}

export default NextAuth(authOptions)