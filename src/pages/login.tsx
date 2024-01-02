import { SyntheticEvent, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () =>{
	const login = async(e:SyntheticEvent) =>{
		e.preventDefault()
		console.log("login")
	}

	return(
		<div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
            <div className="container">
            	<div className="justify-content-center align-items-center px-3 row">
            		<div className="col-md-8">
            			<div className="row">
            				<div className="bg-white border p-5 col-md-7">
            					<h1>Login</h1>
            					<p className="text-black-50"> Singn In to your account</p>
            					<form onSubmit={login}>
            						<div className="input-group mb-3">
										<div className="input-group-prepend">
										    <span className="input-group-text" id="basic-addon1">@</span>
										</div>
										<input type="text" className="form-control" placeholder="Username" />
									</div>

									<div className="input-group mb-3">
										<div className="input-group-prepend">
										    <span className="input-group-text" id="basic-addon1">@</span>
										</div>
										<input type="text" className="form-control" placeholder="password" />
									</div>
									<div className="row">
            							<div className="col-6">
	            							<button type="submit" className="px-4 btn btn-primary">Login</button>
	            						</div>
	            						<div className="text-right col-6">
	            							<button type="submit" className="px-0 btn btn-link">Forgot password?</button>
	            						</div>
            						</div>
            					</form>
            				</div>
            				<div className="bg-primary text-white d-flex align-items-center justify-content-center p-5 col-md-5">
	            				<div className="text-center">
	            					<h2>Sign up</h2>
	            					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	            					<a href="/register">
	            						<button className="btn btn-lg btn-outline-light mt-3" type="button">Register Now!</button>
	            					</a>
	            				</div>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
        </div>
	)
}

export default Login