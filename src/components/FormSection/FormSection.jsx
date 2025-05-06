import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import css from './FormSection.module.css';

const FormSection = ({ onAddOrder }) => {
  const handleSubmit = (values, helpers) => {
    const NewOrder = {
      id: values.id,
      EP: values.EP,
      pedidos: [
        {
          tipo: values.pedido.tipo,
          medida: {
            x: values.pedido.medida.x,
            y: values.pedido.medida.y,
          },
          quantidade: values.pedido.quantidade,
          motivo: values.pedido.motivo,
          zona: {
            linha: values.pedido.zona.linha,
            operador: values.pedido.zona.operador,
            data: values.pedido.zona.date,
          },
        },
      ],
    };

    onAddOrder(NewOrder);
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: `id-${nanoid()}`,
        EP: '',
        pedido: {
          tipo: '',
          medida: { x: '', y: '' },
          quantidade: 1,
          motivo: '',
          zona: {
            linha: '',
            operador: '',
            date: new Date().toLocaleString('pt-PT', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),
          },
        },
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Linha info</legend>
          <label className={css.label}>Local</label>
          <Field as="select" name="pedido.zona.linha" className={css.input}>
            <option value="" disabled>
              --
            </option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
          </Field>

          <label className={css.label}>Operador</label>
          <Field
            type="text"
            name="pedido.zona.operador"
            className={css.input}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Vidro info</legend>
          <label className={css.label}>EP</label>
          <Field type="number" name="EP" className={css.input} />

          <label className={css.label}>Virdo</label>
          <Field as="select" name="pedido.tipo" className={css.input}>
            <option value="" disabled>
              --
            </option>
            <option value="vf">VF</option>
            <option value="lam">Laminado</option>
            <option value="temp">Temperado</option>
          </Field>

          <label className={css.label}>Medida</label>
          <p className={css.medida}>
            <Field
              type="number"
              name="pedido.medida.x"
              className={css['input-medida']}
            />
            x
            <Field
              type="number"
              name="pedido.medida.y"
              className={css['input-medida']}
            />
          </p>

          <label className={css.label}>Quantidade</label>
          <Field
            type="number"
            name="pedido.quantidade"
            className={css.input}
            min={1}
          />

          <label className={css.label}>Observações</label>
          <Field type="text" name="pedido.motivo" className={css.input} />
        </fieldset>

        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default FormSection;
