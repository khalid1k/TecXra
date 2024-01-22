import { useEffect, useRef,useState } from "react";
import "./Register.css";
const Register=()=>{
  const name1=useRef();
  const age1=useRef();
  const [gender, setGeder]=useState('Male');
 

  //handle the submit
  const handleSubmit=async(e)=>{
    e.preventDefault();
     //get values of the input fields
  const name=name1.current.value;
  const age=age1.current.value;
  const obj={name, age,gender};
  //now send the data to the dataBase
  const data=fetch('http://localhost:9797/',{
      method:"post",
      body:JSON.stringify(obj),
      headers:{"content-Type":"Application/json"}
    })
    //it used to clear the form value
    name1.current.value="";
    age1.current.value="";
  }

    return(
        <div className="register">
            <form onSubmit={handleSubmit}>
  <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input ref={name1} type="text" className="form-control" id="inputName"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
    <div className="col-sm-10">
      <input ref={age1} type="number" className="form-control" id="inputAge"/>
    </div>
  </div>
  <fieldset className="row mb-3 ">
    <legend className="col-form-label col-sm-2 pt-0  radioGap">Gender</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input  className="form-check-input" type="radio" name="gender" id="gridRadios1" value="Male"  onChange={(e)=>setGeder(e.target.value)}/>
        <label className="form-check-label" htmlFor="gridRadios1">
          Male
        </label>
      </div>
      <div className="form-check" >
        <input  className="form-check-input" type="radio" name="gender" id="gridRadios2" value="Female" onChange={(e)=>setGeder(e.target.value)}/>
        <label className="form-check-label" htmlFor="gridRadios2">
          Female
        </label>
      </div>
     
    </div>
  </fieldset>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
export default Register;