import React,{useState} from 'react';

const Form = (props) => {

	const [credentials,setCredentials] = useState({
		firstName:"",
		lastName:"",
		email:"",
		password:"",
		confirmPassword:"",
	});

	const [validState,setValidState] = useState({
		firstName:false,
		lastName:false,
		email:false,
		password:false,
		confirmPassword:false,
	})
	
	const handleChange = (e) => {
			setCredentials({
				...credentials,
				[e.target.name]:e.target.value
			});
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		if(credentials.firstName.length<3){
			var firstName = true;
		}
		if(credentials.lastName.length<3){
			var lastName = true;
		}	
		if(credentials.email.length<3){
			var email = true;
		}
		if(credentials.password.length<8){
			var password = true;
		}
		if(credentials.confirmPassword !== credentials.password ){
			var confirmPassword = true;
		}


		setValidState({
				...validState,firstName,lastName,email,password,confirmPassword
		});
	}

  return (
  	
    <div>
    	<form class="form" onSubmit={handleSubmit}>
    		<label>first name: </label>
    			<input onChange={handleChange} name="firstName" type="text"/>
    			<br/>
    		{validState.firstName ? <p>it has to be more than 3 chars.</p>:null}
    		
    		<label>last name:</label>
    			<input onChange={handleChange} name="lastName" type="text"/>
    			<br/>
    		{validState.lastName ? <p>it has to be more than 3 chars.</p>:null}
  
    		<label>email:</label>
    		<input onChange={handleChange} name="email" type="text"/>
    		<br/>
    		{validState.email ? <p>it has to be more than 3 chars.</p>:null}
    		
    		<label>password:</label>
				<input onChange={handleChange} name="password" type="text"/>
    		<br/>
    		{validState.password ? <p>it has to be more than 8 chars.</p>:null}
    		
    		<label>confirm password:</label>
    		<input onChange={handleChange} name="confirmPassword" type="text"/>
    		{validState.confirmPassword ? <p>passwords has to match.</p>:null}
    		<br/>

    		<input type="submit" class="btn btn-primary" onSubmit={handleChange} value="add it"/>
    	
    	</form>
    </div>
  )
}

export default Form;