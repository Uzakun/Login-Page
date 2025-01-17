import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/register', {name, email, password})
      .then(result => {
         console.log(result);
         navigate('/login');
      })
      .catch(err => console.log(err));
   };

   return (
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
         <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
               <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ borderRadius: "25px" }}>
                     <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                           <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                              <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                                 <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                       <input type="text" id="form3Example1c" className="form-control" onChange={(e) => setName(e.target.value)} />
                                       <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                    </div>
                                 </div>
                                 <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                       <input type="email" id="form3Example3c" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                       <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                    </div>
                                 </div>
                                 <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                       <input type="password" id="form3Example4c" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                       <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    </div>
                                 </div>
                                 <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                 </div>
                                 <div className="col text-center mb-2">
                                    <h4>Already have an account</h4>
                                 </div>
                                 <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <Link to="/login" type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-secondary btn-lg">Login</Link>
                                 </div>
                              </form>
                           </div>
                           <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                              <img src="./imagess/mental-health-pictures-i8ov8ws3hfw2v4ix.jpg" className="img-fluid" alt="Sample image" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Signup;
