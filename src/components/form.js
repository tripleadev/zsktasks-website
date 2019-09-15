import React, { Component } from "react"
import axios from "axios"
import { Formik } from 'formik';

import "./form.css"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      data: [],
    };
    this.sendData.bind(this);
    this.render.bind(this);
  }

  sendData(data) {
    const url = 'https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/all';

    axios.post(url, data);
  }

  render() {
    return (
      <div className="form">
        <Formik
          initialValues={{ title: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            const url = 'https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/add';
            axios.post(url, values)
            .then(()=>{
              setSubmitting = false;
            })
            .catch(()=>{
              setSubmitting = false;
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Nazwa"
              />
              <input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Przedmiot"
              />
              <input
                type="text"
                name="uploadCode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Kod bezpieczeństwa"
              />
              <textarea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Opis"
              />
              {errors.email && touched.email && errors.email}
              <button type="submit" disabled={isSubmitting}>
                DODAJ
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}