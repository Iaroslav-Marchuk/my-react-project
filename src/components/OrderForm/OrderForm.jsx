import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './OrderForm.module.css';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  useremail: Yup.string().email('Must be a valid email!').required('Required'),
});

export default function OrderForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        useremail: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Username
        </label>
        <Field
          className={css.input}
          type="text"
          name="username"
          id={nameFieldId}
          autoComplete="username"
        />
        <ErrorMessage className={css.error} name="username" component="span" />

        <label className={css.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="useremail"
          id={emailFieldId}
        />
        <ErrorMessage className={css.error} name="useremail" component="span" />

        <label className={css.label} htmlFor={passFieldId}>
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passFieldId}
          autoComplete="current-password"
        />

        <button className={css.btn} type="submit">
          Send Form
        </button>
      </Form>
    </Formik>
  );
}
