import React,{useState} from 'react';

const Form = (props) => {

	const [credentials,setCredentials] = useState({
		firstName:"Must be at least 2 characters",
		lastName:"Must be at least 2 characters",
		email:"Must be at least 2 characters",
		password:"Must be at least 8 characters",
		confirmPassword:"Must match with password"
	})
	
	const handleChange = (e)=>{
		const {name, value} = e.target;


		if(value.length<3 && name != "password" && name !="confirmPassword"){
			return
		}
		else if(value.length<8 &&
			(name == "password"  ||
			name == "confirmPassword") &&
			credentials["password"] != credentials["confirmPassword"]){	
			return
		}

		else{
			setCredentials({
				...credentials,
				[name]:value
			});

		}
	}

  return (
    <div>
    	<form class="form">
    		<p>first name: <input onChange={handleChange} name="firstName" type="text"/><br/>
    		{credentials.firstName}</p>
    		<p>last name: <input onChange={handleChange} name="lastName" type="text"/><br/>
    		{credentials.lastName}</p>
    		<p>email: <input onChange={handleChange} name="email" type="text"/><br/>
    		{credentials.email}</p>
    		<p>password: <input onChange={handleChange} name="password" type="text"/><br/>
    		{credentials.password}</p>
    		<p>confirm password: <input onChange={handleChange} name="confirmPassword" type="text"/></p>
    		{credentials.confirmPassword}
    	{
    		credentials.password==credentials.confirmPassword?<p>it works</p>:<p>Doesnt work</p>
    	}
    	</form>
    </div>
  )
}

export default Form;