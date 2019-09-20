import React, { Component } from "react"
import axios from "axios"
import { Formik } from "formik"
import { Form, Datepicker, SubmitBtn, Input } from "react-formik-ui"
import * as Yup from "yup"

import "./form.css"

const formValidation = Yup.object().shape({
  datePicker: Yup.date().min(
    new Date(Date.now() + -1 * 24 * 3600 * 1000),
    "Podaj późniejszą datę"
  ),
  title: Yup.string()
    .min(2, "Za krótki")
    .max(30, "Za długi"),
  subject: Yup.string()
    .min(2, "Za krótki")
    .max(30, "Za długi"),
  description: Yup.string()
    .min(4, "Za krótki")
    .max(500, "Za długi"),
})

export default class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: "",
      info: "",
    }
    this.render.bind(this)
  }

  render() {
    return (
      <div className="form">
        <Formik
          initialValues={{
            datePicker: "",
            title: "",
            subject: "",
            description: "",
            password: "",
          }}
          validationSchema={formValidation}
          onSubmit={data => {
            axios
              .post("https://zsktasks-api.herokuapp.com/add", {
                date: data.datePicker,
                title: data.title,
                subject: data.subject,
                description: data.description,
                uploadCode: data.password,
              })
              .then(res => {
                alert(res)
              })
          }}
          render={({ errors }) => (
            <Form mode="themed">
              <div>
                <Input
                  name="title"
                  placeholder="Nazwa zadania"
                  hint={errors.title}
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Przedmiot, na który zostało zadane zadanie"
                  hint={errors.subject}
                />
              </div>
              <div>
                <Datepicker
                  name="datePicker"
                  placeholder="Wybierz datę"
                  disabledKeyboardNavigation={false}
                />
              </div>
              <div>
                <Input
                  component="textarea"
                  name="description"
                  placeholder="Opis zadania"
                  hint={errors.description}
                />
              </div>
              <div>
                <Input
                  name="password"
                  placeholder="Kod zabezpieczający"
                  type="password"
                />
              </div>
              <SubmitBtn />
            </Form>
          )}
        />
      </div>
    )
  }
}
