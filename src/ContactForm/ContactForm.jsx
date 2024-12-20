import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    contactname:Yup.string().min(3,"Мінімум 3 символи!").max(50,"Максимум 50 символів!").required("Це поле обов'язкове!")
})

const initialValues = {
    contactname:"",
    phonenumber: "",
};

const ContactForm = () => {
  const contactnameFieldId = useId();
  const phonenumberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    };

    return (
        <div className={styles.ContactFormContainer} >
            <Formic initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                    <div>
                        <label htmlFor="{contactnameFieldId}">Ім'я</label>
                        <Field type="text" name="contactname" id={contactnameFieldId} />
                        <ErrorMessage name="contactname" className={styles.error} component="span" />
                        
                    </div>
                    <div>
                        <label htmlFor="phonenumberFieldId">Номер телефону</label>
                            <Field type="number" name="phonenumber" id={phonenumberFieldId} />
                            <ErrorMessage name="phonenumber" className={styles.error} component="span"/>
                    </div>
                    <button type="submit">Зберегти контакт</button>

                </Form>
            </Formic>
      </div>
       
    )
};
