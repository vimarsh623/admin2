import React,{useEffect} from 'react'
const Loginn = () => {
    
    
	useEffect(() => {
		document.getElementById('root')
	}, [])
    return (
        <div >
         
		<div className="d-flex flex-column flex-root">
			
			<div className="d-flex flex-column flex-lg-row flex-column-fluid" id="kt_login">
				
				<div className="d-flex flex-column flex-lg-row-auto bg-primary w-lg-600px pt-15 pt-lg-0">
					
					<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15 text-center">
						
						<a href="../index-2.html" className="mb-6">
							<img alt="Logo" src="../assets/media/logos/logo-default.svg" className="h-75px" />
						</a>
						
						<h3 className="fw-bolder fs-2x text-white lh-lg">Discover Start
						<br />with great build tools</h3>
						
					</div>
					
					<div className="d-flex flex-row-fluid bgi-size-contain bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-350px" style= {{backgroundImage:'url(../assets/media/svg/illustrations/login-1.svg)'}} ></div>
					
				</div>
				
				<div className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-20 px-10 p-lg-7 mx-auto mw-450px w-100">
					
					<div className="d-flex flex-column-fluid flex-center py-10">
						
						<form className="form w-100" novalidate="novalidate" id="kt_login_signin_form" data-after-login-url="../index-2.html">
							
							<div className="pb-5 pb-lg-15">
								<h3 className="fw-bolder text-dark display-6">Welcome to Start</h3>
								<div className="text-muted fw-bold fs-3">New Here? 
								<a href="#" className="text-primary fw-bolder" id="kt_login_signin_form_singup_button">Create Account</a></div>
							</div>
							
							<div className="fv-row mb-10">
								<label className="form-label fs-6 fw-bolder text-dark">Email</label>
								<input className="form-control form-control-lg form-control-solid" type="text" name="username" autocomplete="off" />
							</div>
							
							<div className="fv-row mb-10">
								<div className="d-flex justify-content-between mt-n5">
									<label className="form-label fs-6 fw-bolder text-dark pt-5">Password</label>
									<a href="#" className="text-primary fs-6 fw-bolder text-hover-primary pt-5" id="kt_login_signin_form_password_reset_button">Forgot Password ?</a>
								</div>
								<input className="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
							</div>
							
							<div className="pb-lg-0 pb-5">
								<button type="submit" id="kt_login_signin_form_submit_button" className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3">Sign In</button>
								<button type="button" className="btn btn-light-primary fw-bolder px-8 py-4 my-3 fs-6">
								<img src="../assets/media/svg/social-icons/google.svg" className="w-20px h-20px me-3" alt="" />Sign in with Google</button>
							</div>
							
						</form>
						
						<form className="form d-none w-100" novalidate="novalidate" id="kt_login_signup_form">
							
							<div className="pb-5 pb-lg-15">
								<h3 className="fw-bolder text-dark display-6">add user</h3>
								<p className="text-muted fw-bold fs-3">Enter your details to create userr account</p>
							</div>
							
							<div className="fv-row mb-5">
								<label className="form-label fs-6 fw-bolder text-dark pt-5">Name</label>
								<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="fullname" autocomplete="off" />
							</div>
							

							<div className="fv-row mb-5">
								<label className="form-label fs-6 fw-bolder text-dark pt-5">Email</label>
								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
							
							<div className="fv-row mb-5">
								<label className="form-label fs-6 fw-bolder text-dark pt-5">number</label>
								<input className="form-control form-control-lg form-control-solid" type="number" placeholder="" name="email" autocomplete="off" />
							</div>
							{/* <div className="fv-row mb-5">
								<label className="form-label fs-6 fw-bolder text-dark pt-5">Password</label>
								<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
							</div> */}
							{/* <div className="fv-row mb-10">
								<label className="form-label fs-6 fw-bolder text-dark pt-5">Confirm Password</label>
								<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="cpassword" autocomplete="off" />
							</div> */}
							{/* <div className="fv-row mb-10">
								<div className="form-check form-check-custom form-check-solid mb-5">
									<input className="form-check-input" type="checkbox" id="kt_login_toc_agree" value="1" />
									<label className="form-check-label fw-bold text-gray-600" for="kt_login_toc_agree">I Agree the 
									<a href="#" className="ms-1">terms and conditions</a>.</label>
								</div>
							</div> */}
							
							<div className="d-flex flex-wrap pb-lg-0 pb-5">
								<button type="button" id="kt_login_signup_form_submit_button" className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4">Submit</button>
								<button type="button" id="kt_login_signup_form_cancel_button" className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3">Cancel</button>
							</div>
							
						</form>
						
						<form className="form d-none w-100" novalidate="novalidate" id="kt_login_password_reset_form">
							
							<div className="pb-5 pb-lg-10">
								<h3 className="fw-bolder text-dark display-6">Forgotten Password ?</h3>
								<p className="text-muted fw-bold fs-3">Enter your email to reset your password</p>
							</div>
							
							<div className="fv-row mb-10">
								<label className="form-label fs-6 fw-bolder text-dark pt-5">Email</label>
								<input className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
							</div>
							
							<div className="d-flex flex-wrap pb-lg-0">
								<button type="button" id="kt_login_password_reset_form_submit_button" className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4">Submit</button>
								<button type="button" id="kt_login_password_reset_form_cancel_button" className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3">Cancel</button>
							</div>
							
						</form>
						
					</div>
					
					<div className="d-flex justify-content-lg-start justify-content-center align-items-center py-7 py-lg-0">
						<a href="#" className="text-primary fw-bolder fs-4">Terms</a>
						<a href="#" className="text-primary ms-10 fw-bolder fs-4">Plans</a>
						<a href="#" className="text-primary ms-10 fw-bolder fs-4">Contact Us</a>
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		<script src="../assets/plugins/global/plugins.bundle.js"></script>
		<script src="../assets/js/scripts.bundle.js"></script>
		
		<script src="../assets/js/custom/general/login.js"></script>
		


        </div>
    
    
    
    )
}
export default Loginn