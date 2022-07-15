import React, { Component } from "react";
import "./style.css";
import OptionDepartment from "./OptionDepartment";

const departs = {
  core: [
    "javascripting",
    "git-it",
    "Scope Chains & Closures",
    "ElementaryElectron",
    "learnyounode",
    "How to npm",
    "stream-adventure",
    "how-to-markdown",
  ],
  electives: [
    "Functional Javascript",
    "Level Me Up Scotty!",
    "ExpressWorks",
    "Make Me Hapi",
    "PromiseIt Won't Hurt",
    "Async You",
    "NodeBot Workshop",
    "Going Native",
    "Planet Proto",
    "WebGLWorkshop",
    "ESNext Generation",
    "Test Anything",
    "Tower of babel",
    "learnyoumongo",
    "regex-adventure",
    "learn-sass",
    "Pattern Lab Workshop",
    "learnyoubash",
    "Currying inJavaScript",
    "Shader School",
    "Bytewiser",
    "Bug Clinic",
    "Browserify Adventure",
    "Intro toWebGL",
    "Count to 6",
    "Kick off Koa",
    "LololoDash",
    "learnyoucouchdb",
    "learnuv",
    "LearnGenerators",
    "learnyoureact",
    "perfschool",
    "Web Audio School",
    "torrential",
    "Thinking inReact",
    "Post-mortem debugging",
    "Seneca in practice",
    "LESS is more",
  ],
};

class Form extends Component {
  state = {
    fields: {
      name: "",
      email: "",
      department: null,
      course: null,
      nameError: "",
      emailError: "",
    },
    departmentlist: departs,
    courselist: [],
    people: [
      {
        name: "potato",
        email: "potato@person.com",
        department: "core",
        course: "javaScripting",
      },
    ],
  };
  changeHandle = (event) => {
    const { name, value } = event.target;
    this.setState(
      { fields: { ...this.state.fields, [name]: value } },
      this.validate
    );
  };

  validate = () => {
    this.validateEmail();
    this.validateName();
  };

  validateName = () => {
    const { name } = this.state.fields;
    console.log(name, "name");
    if (name === "") {
      this.setState({
        fields: {
          ...this.state.fields,
          nameError: "Username field cannot be blank?",
        },
      });
    } else if (new RegExp("[0-9]").test(name)) {
      this.setState({
        fields: {
          ...this.state.fields,
          nameError: "Username field is not valid!",
        },
      });
    } else {
      this.setState({ fields: { ...this.state.fields, nameError: "" } });
    }
  };

  validateEmail = () => {
    const { email } = this.state.fields;

    if (email === "") {
      this.setState({
        fields: {
          ...this.state.fields,
          emailError: "Email field cannot be blank?",
        },
      });
    } else if (!email.includes("@")) {
      this.setState({
        fields: {
          ...this.state.fields,
          emailError: "Email field is not valid!",
        },
      });
    } else {
      this.setState({ fields: { ...this.state.fields, emailError: "" } });
    }
  };

  submitHandle = (e) => {
    e.preventDefault();
    const { name, email, department, course } = this.state.fields;
    this.setState({
      people: [...this.state.people, { name, email, department, course }],
    });
    console.log(123);
  };

  handleDepartment = (e) => {
    let valueDepartment = e.target.value;
    this.setState({
      fields: { ...this.state.fields, department: valueDepartment },
    });
    let listCourse = this.state.departmentlist.find(
      (department) => department === valueDepartment
    );
    // this.setState({
    //   courselist: listCourse,
    // });
  };

  handleCourse = (e) => {
    let valueCourse = e.target.value;
    this.setState({
      fields: { ...this.state.fields, course: valueCourse },
    });
  };
  render() {
    const { name, email, nameError, emailError } = this.state.fields;
    console.log(this.state.fields);
    return (
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h2>React Form</h2>
                <h3>Sign Up Sheet</h3>
                <form
                  className="requires-validation"
                  onSubmit={this.submitHandle}
                  novalidate
                >
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Full Name"
                      onChange={this.changeHandle}
                      required
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {nameError}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="E-mail Address"
                      onChange={this.changeHandle}
                      required
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {emailError}
                    </div>
                  </div>
                  <OptionDepartment
                    departmentlist={this.state.departmentlist}
                    courselist={this.state.courselist}
                    handleDepartment={this.handleDepartment}
                    handleCourse={this.handleCourse}
                  />
                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                  <div>
                    <p>people</p>
                    {this.state.people.map((person, index) => (
                      <div key={index}>
                        <span>{`name : ${person.name}`},</span>
                        <span>{`email:${person.email}`},</span>
                        <span>{`department:${person.department || "-"}`},</span>
                        <span>{`corse:${person.course || "-"} `},</span>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
