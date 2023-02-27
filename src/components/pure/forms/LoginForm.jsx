import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Formato incorrecto")
    .required("Email es requerido"),
  password: Yup.string().required("Password requerido")
});

export default function LoginForm() {
  const initValues = {
    email: "",
    password: ""
  };
  return (
    <section className="login-form">
      <Formik
        initialValues={initValues}
        validationSchema={schema}
        onSubmit={(values) => {}}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              type="string"
              id="email"
              name="email"
              placeholder="example@.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="span" />
            )}

            <label htmlFor="password">Password</label>
            <Field type="string" id="password" name="password" />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="span" />
            )}
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </section>
  );
}
