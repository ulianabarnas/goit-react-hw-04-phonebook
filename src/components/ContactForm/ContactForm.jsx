import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Input, Label } from './ContactForm.styles';
import FormError from 'components/FormError/FormError';

const initialValues = {
    name: '',
    number: '',
}

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const validationSchema = yup.object().shape({
    name: yup.string().matches(nameRegExp, 'Name may contain only letters, apostrophe, dash and spaces.').required('Please fill in the name'),

    number: yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Please fill in the number'),
})

export default function ContactForm({addContact}) {
    const handleSubmit = (values, {resetForm}) => {
        addContact(values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form autoComplete='off'>
                <Label>Name 
                    <Input
                        type="text"
                        name="name"
                    />
                </Label>
                <FormError name="name" />

                <Label>Number 
                    <Input
                        type="tel"
                        name="number"
                    />
                </Label>
                <FormError name="number" />
                
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}