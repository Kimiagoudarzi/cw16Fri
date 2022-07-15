import React, { Component } from 'react';

class OptionDepartment extends Component {
    render() { 
        return (
            <>
            <div className="col-md-12">
                <select className="form-select mt-3" required>
                    <option selected disabled value=""></option>
                    <option value="jweb"></option>
                    <option value="sweb">Senior Web Developer</option>
                    <option value="pmanager">Project Manager</option>
                </select>
                <div className="valid-feedback">You selected a position!</div>
                <div className="invalid-feedback">Please select a position!</div>
            </div>

            <div className="col-md-12">
                <select className="form-select mt-3" required>
                    <option selected disabled value=""></option>
                    <option value="jweb"></option>
                    <option value="sweb">Senior Web Developer</option>
                    <option value="pmanager">Project Manager</option>
                </select>
                <div className="valid-feedback">You selected a position!</div>
                <div className="invalid-feedback">Please select a position!</div>
            </div>
        </>
        );
    }
}
 
export default OptionDepartment;