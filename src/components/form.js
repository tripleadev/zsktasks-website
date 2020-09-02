import React, { Component } from "react"
import axios from "axios"
import { Formik } from "formik"
import { Form, Datepicker, SubmitBtn, Input, Select } from "react-formik-ui"
import * as Yup from "yup"
import moment from "moment"

import "./form.css"

const formValidation = Yup.object().shape({
  datePicker: Yup.date()
    .min(new Date(Date.now() + -1 * 24 * 3600 * 1000), "Podaj późniejszą datę")
    .required("Wprowadź datę"),
  title: Yup.string()
    .min(4, "Za krótki")
    .max(30, "Za długi")
    .required("Wprowadź tytuł"),
  description: Yup.string()
    .min(4, "Za krótki")
    .max(500, "Za długi")
    .required("Wproawdź opis"),
  subject: Yup.string().required("Podaj przedmiot"),
  password: Yup.string().required("Podaj kod zabezpieczający"),
})

const subjects = [
  {
    value: "BHP",
    label: "BHP",
  },
  {
    value: "Biologia",
    label: "Biologia",
  },
  {
    value: "Chemia",
    label: "Chemia",
  },
  {
    value: "EDB",
    label: "EDB",
  },
  {
    value: "Fizyka",
    label: "Fizyka",
  },
  {
    value: "Geografia",
    label: "Geografia",
  },
  {
    value: "Historia",
    label: "Historia",
  },
  {
    value: "Informatyka Gr.1",
    label: "Informatyka Gr.1",
  },
  {
    value: "Informatyka Gr. 2",
    label: "Informatyka Gr. 2",
  },
  {
    value: "Język Angielski Gr. 1",
    label: "Język Angielski Gr. 1",
  },
  {
    value: "Język Angielski Gr. 2",
    label: "Język Angielski Gr. 2",
  },
  {
    value: "Język Niemiecki Gr. 1",
    label: "Język Niemiecki Gr. 1",
  },
  {
    value: "Język Niemiecki Gr. 2",
    label: "Język Niemiecki Gr. 2",
  },
  {
    value: "Język Polski",
    label: "Język Polski",
  },
  {
    value: "Matematyka",
    label: "Matematyka",
  },
  {
    value: "Ogólne",
    label: "Ogólne",
  },
  {
    value: "Plastyka",
    label: "Plastyka",
  },
  {
    value: "PSK Gr. 1",
    label: "PSK Gr. 1",
  },
  {
    value: "PSK Gr. 2",
    label: "PSK Gr. 2",
  },
  {
    value: "PSO Gr. 1",
    label: "PSO Gr. 1",
  },
  {
    value: "PSO Gr.2",
    label: "PSO Gr.2",
  },
  {
    value: "PUTK Gr. 1",
    label: "PUTK Gr. 1",
  },
  {
    value: "PUTK Gr. 2",
    label: "PUTK Gr. 2",
  },
  {
    value: "SK",
    label: "SK",
  },
  {
    value: "SO",
    label: "SO",
  },
  {
    value: "UTK",
    label: "UTK",
  },
  {
    value: "Zajęcia z wychowawcą",
    label: "Zajęcia z wychowawcą",
  },
]

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
                date: moment(data.datePicker).format("YYYY-MM-DD"),
                title: data.title,
                subject: data.subject,
                description: data.description,
                uploadCode: data.password,
              })
              .then(res => {
                alert(
                  `Utworzono nowe zadanie o tytule: \n${res.data.data.title}`
                )
              })
              .catch(err => {
                let errors = ""
                err.response.data.errors.errors.map(error => {
                  return (errors += ` ${error.msg}`)
                })

                console.log(err.response.data)

                return alert(`Błąd w formularzu:${errors}`)
              })
          }}
        >
          <Form mode="themed">
            <div>
              <Input name="title" placeholder="Nazwa zadania" required />
            </div>
            <div>
              <Select
                name="subject"
                placeholder="Wybierz przedmiot"
                options={subjects}
                required
              />
            </div>
            <div>
              <Datepicker
                name="datePicker"
                placeholder="Wybierz datę"
                disabledKeyboardNavigation={false}
                dateFormat="yyyy-MM-dd"
                required
              />
            </div>
            <div>
              <Input
                component="textarea"
                name="description"
                placeholder="Opis zadania"
                required
              />
            </div>
            <div>
              <Input
                name="password"
                placeholder="Kod zabezpieczający"
                type="password"
                required
              />
            </div>
            <SubmitBtn />
          </Form>
        </Formik>
      </div>
    )
  }
}
