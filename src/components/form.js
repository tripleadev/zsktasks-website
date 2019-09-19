import React, { Component } from "react"
import axios from "axios" // eslint-disable-line
import { Formik } from "formik"
import { Form, Datepicker, SubmitBtn, Input } from "react-formik-ui"

import "./form.css"

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
          }}
          onSubmit={data => alert(JSON.stringify(data))}
          render={() => (
            <Form mode="themed">
              <div>
                <Input name="title" placeholder="Nazwa zadania" />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Przedmiot, na który zostało zadane zadanie"
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
