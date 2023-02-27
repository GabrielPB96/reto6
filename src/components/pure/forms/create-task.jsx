import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Level } from "../../../models/level.enum";
import { Task } from "../../../models/task.class";
const CreateTask = ({ actionAdd }) => {
  const init = {
    name: "",
    description: ""
  };
  const schema = Yup.object().shape({
    name: Yup.string().min(6, "small name").required("Name is required"),
    description: Yup.string()
      .min(6, "small description")
      .required("Description is required")
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        background: "#F5DEB3",
        padding: "10px"
      }}
    >
      <h3>Create Task</h3>
      <Formik
        initialValues={init}
        validationSchema={schema}
        onSubmit={async (values) => {
          await new Promise((r) => {
            setTimeout(r, 1000);
          });
          //alert(JSON.stringify(values, null, 2));
          actionAdd(new Task(values.name, values.description));
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur
        }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              gap: "10px",
              width: "300px",
              margin: "auto"
            }}
          >
            <Field type="text" id="name" placeholder="Name" name="name"></Field>
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="span"></ErrorMessage>
            )}
            <Field
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            ></Field>
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="span"></ErrorMessage>
            )}
            <select name="" id="">
              <option value={Level.NORMAL}>{Level.NORMAL}</option>
              <option value={Level.URGENT}>{Level.URGENT}</option>
              <option value={Level.BLOCKING}>{Level.BLOCKING}</option>
            </select>
            <button type="submit">Add</button>
            {isSubmitting ? <p>Creanting...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTask;
