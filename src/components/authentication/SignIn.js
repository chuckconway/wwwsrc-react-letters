import React from 'react';

const SignIn = () => {
    return (
        <div >
            <h1>SignIn</h1>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" className="form-control" />
                        <label htmlFor="">Password</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button type="button" className="btn btn-primary float-right">Sign In</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>)
};

export default SignIn;