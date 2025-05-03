import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import css from './FormSection.module.css';

const FormSection = ({ children }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        operador: '',
        vidro: { tipo: '', medida: '', quant: '' },
        observa: '',
      }}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Linha info</legend>
          <label className={css.label}>Local</label>
          <Field
            as="select"
            name="linhaLocal"
            className={css.input}
            id={`${nanoid()}-deliveryTime`}
          >
            <option value="" disabled>
              --
            </option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </Field>

          <label className={css.label} htmlFor={`${nanoid()}-username`}>
            Operador
          </label>
          <Field
            type="text"
            name="username"
            className={css.input}
            id={`${nanoid()}-username`}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Vidro info</legend>
          <label className={css.label}>Vido</label>
          <Field
            as="select"
            name="linhaLocal"
            className={css.input}
            id={`${nanoid()}-vidro`}
          >
            <option value="" disabled>
              --
            </option>
            <option value="vf">VF</option>
            <option value="lam">Laminado</option>
            <option value="temp">Temperado</option>
          </Field>

          <label className={css.label}>Medida</label>
          <Field
            type="text"
            name="medida"
            className={css.input}
            id={`${nanoid()}-medida`}
          />

          <label className={css.label}>Quantidade</label>
          <Field
            type="text"
            name="quantidade"
            className={css.input}
            id={`${nanoid()}-quantidade`}
          />

          <label className={css.label}>Observações</label>
          <Field
            type="text"
            name="observa"
            className={css.input}
            id={`${nanoid()}-observa`}
          />
        </fieldset>

        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default FormSection;
