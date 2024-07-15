
import { useState } from 'react';
import * as Yup from 'yup';
// import FormatDate from 'date-formatter-package';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormatDate from 'date-formatter-package';

export default function LoginForm() {
    // const [formattedDate, setFormattedDate] = useState('');

    const [formattedDate, setFormatteddate] = useState('');

    const handleSubmit = (values) => {
        const formatted = FormatDate(values.timestamp, true);
        setFormatteddate(formatted);

    };
    const validationSchema = Yup.object().shape({
        timestamp: Yup.date().required('Timestamp is required'),
    });



    return (
        <>
            <h3>date form</h3>
            <Formik
                initialValues={{ timestamp: new Date() }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                sx={{width: 500,
                    maxWidth: '100%',}}>
                {({ errors, touched }) => (
                    <><Form sx={{ width: '500' }}>
                        <Field name="timestamp" type="datetime-local" />
                        <ErrorMessage name="timestamp" component="div" />
                        <button sx={{ width: '50' }} type="submit">Submit</button>
                        {formattedDate && <p>Formatted Date: {formattedDate} </p>}
                    </Form>
                    <button type='submit' sx={{width: 500,
        maxWidth: '100%',}} > click</button>
                    {formattedDate && <p>Formatted Date: {formattedDate}</p>}
                    </>
                )}
            </Formik>
        </>
    )
}
