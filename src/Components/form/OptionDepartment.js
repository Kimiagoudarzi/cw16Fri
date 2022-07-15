import React, { Component } from "react";

class OptionDepartment extends Component {
  render() {
    const { departmentlist, courselist, handleDepartment, handleCourse } =
      this.props;
    return (
      <>
        <div className="col-md-12">
          <select
            onChange={handleDepartment}
            className="form-select mt-3"
            required
          >
            <option selected disabled value="">
              Selected
            </option>
            {Object.keys(departmentlist).map((department, index) => (
              <option value={department} key={index}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-12">
          {courselist.length ? (
            <select
              onChange={handleCourse}
              className="form-select mt-3"
              required
            >
              <option selected disabled value="">
                Selected
              </option>

              {courselist.map((course) => (
                <option value={course}>{course}</option>
              ))}
            </select>
          ) : null}

          <div className="valid-feedback">You selected a position!</div>
          <div className="invalid-feedback">Please select a position!</div>
        </div>
      </>
    );
  }
}

export default OptionDepartment;
