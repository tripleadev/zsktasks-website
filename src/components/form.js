import React, { Component } from "react"
import axios from "axios"
import { Formik } from 'formik';

import "./form.css"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      info: '',
    };
    this.render.bind(this);
  }

  render() {
    return (
      <div className="form">
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            const url = 'https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/add';
            axios.post(url, values)
            .then(()=>{
              setSubmitting(false);
              this.setState({info: 'Zadanie dodane !!!'});
            })
            .catch(()=>{
              setSubmitting(false);
            });
          }}
        >
          {({
            values,
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
              <button type="submit" disabled={isSubmitting}>
                DODAJ
              </button>
              {this.state.info}
            </form>
          )}
        </Formik>
      </div>
    );
  }
}