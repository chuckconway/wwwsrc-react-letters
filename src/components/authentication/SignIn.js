import React from 'react';

const SignIn = () => {
    return (
        <div style={{maxWidth:300}}>
            <h1>SignIn</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" className="form-control" />
                        <label htmlFor="">Password</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-primary float-right">Sign In</button>
                </div>
            </div>
        </div>)
};

export default SignIn;