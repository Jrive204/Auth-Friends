import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@bootstrap-styled/v4/lib/Button";

const Login = ({ values, errors, touched, status }) => {
  const [message, setMessage] = useState([]);

  const { push } = useHistory();

  //Submits ----

  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(`http://localhost:5000/api/login`, values)

      .then(res => {
        setMessage([...message, values]);
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
        localStorage.setItem("token", res.data.payload);
        push("/Friends");
      })
      .catch(err => console.log(err))
      .finally();
  };

  // Checking Validations !! ----
  const SignupSchema = () =>
    Yup.object().shape({
      username: Yup.string().min(3, `Name Too Short!`),

      password: Yup.string().required(`Password required`)
    });

  // REturn STARTS HERE  - -------------
  return (
    <div className='Login'>
      <br />
      <Formik
        initialValues={{ username: ``, password: `` }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form className='formbody'>
              <Field
                className='formFields'
                name='username'
                type='text'
                placeholder='UserName'
              />{" "}
              &nbsp;
              {console.log(values, "values")}
              <ErrorMessage name='name' component='span' className='red' />
              <Field
                className='formFields'
                name='password'
                type='password'
                placeholder='Password'
              />
              <ErrorMessage name='password' component='span' className='red' />
              &nbsp;
              <br />
              <Button color='success'>Sign in</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
