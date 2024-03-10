import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Sophie" />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="T"
          labelText="last name"
        />
        <FormRow type="text" name="location" defaultValue="Canada" />
        <FormRow type="email" name="email" defaultValue="Sophie@gmail.com" />
        <FormRow type="password" name="password" defaultValue="password000" />
        <button type="submit" className="btn btn-submit">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
