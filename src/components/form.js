import React, { Component } from "react"
import axios from "axios"
import { Formik } from "formik"
import { Form, Datepicker, SubmitBtn, Input, Select } from "react-formik-ui"
import * as Yup from "yup"

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
    value: "1",
    label: "BHP",
  },
  {
    value: "2",
    label: "Biologia",
  },
  {
    value: "3",
    label: "Chemia",
  },
  {
    value: "4",
    label: "EDB",
  },
  {
    value: "5",
    label: "Fizyka",
  },
  {
    value: "6",
    label: "Geografia",
  },
  {
    value: "7",
    label: "Historia",
  },
  {
    value: "8",
    label: "Informatyka Gr.1",
  },
  {
    value: "9",
    label: "Informatyka Gr. 2",
  },
  {
    value: "10",
    label: "Język Angielski Gr. 1",
  },
  {
    value: "11",
    label: "Język Angielski Gr. 2",
  },
  {
    value: "12",
    label: "Język Niemiecki Gr. 1",
  },
  {
    value: "13",
    label: "Język Niemiecki Gr. 2",
  },
  {
    value: "14",
    label: "Język Polski",
  },
  {
    value: "15",
    label: "Matematyka",
  },
  {
    value: "16",
    label: "Ogólne",
  },
  {
    value: "17",
    label: "Plastyka",
  },
  {
    value: "18",
    label: "PSK Gr. 1",
  },
  {
    value: "19",
    label: "PSK Gr. 2",
  },
  {
    value: "20",
    label: "PSO Gr. 1",
  },
  {
    value: "21",
    label: "PSO Gr.2",
  },
  {
    value: "22",
    label: "PUTK Gr. 1",
  },
  {
    value: "23",
    label: "PUTK Gr. 2",
  },
  {
    value: "24",
    label: "SK",
  },
  {
    value: "25",
    label: "SO",
  },
  {
    value: "26",
    label: "UTK",
  },
  {
    value: "27",
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
            console.log(data.datePicker.toISOString())
            axios
              .post("https://zsktasks-api.herokuapp.com/add", {
                date: data.datePicker.toISOString(),
                title: data.title,
                subject: data.subject,
                description: data.description,
                uploadCode: data.password,
              })
              .then(res => {
                if (res.status === 200) {
                  alert(
                    `Utworzono nowe zadanie o tytule: \n${res.data.data.title}`
                  )
                }
              })
              .catch(err => {
                let errors = ""
                err.response.data.errors.errors.map(error => {
                  return (errors += ` ${error.msg}`)
                })

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
