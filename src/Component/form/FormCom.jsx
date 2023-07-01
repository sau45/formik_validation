import React from 'react'
import { Field, Form, Formik } from 'formik';
import { InputLabel, MenuItem, Button, Checkbox, Box, Chip, ListItemText, OutlinedInput, FormControl, Select, RadioGroup, Radio, FormControlLabel, FormLabel, TextField } from '@mui/material';
import * as Yup from 'yup';
import './style.scss'







function FormCom() {

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Please Enter name")
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
    ,
    Address: Yup.string().required("Please Enter Address")
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),

    country: Yup.string().required("Please Select Country")


  });





  const hobbies = [

    { value: 'Cricket', label: 'Cricket' },
    { value: 'football', label: 'football' },
    { value: 'tennis', label: 'tennis' },



  ];

  const countries = [
    { value: 'India', label: 'India' },
    { value: 'SriLanka', label: 'SriLanka' },
    { value: 'Bhutan', label: 'Bhutan' },
    // Add more countries as needed
  ];

  const initialValue = {
    name: "",
    Address: "",
    country: "",
    hobbies: [],
    Gender: " "


  }






  return (
    <>

      <div className="main-section">


      

          <Formik
            initialValues={initialValue}

            validationSchema={SignupSchema}


            onSubmit={(values, formikHelpers) => {

              alert(JSON.stringify(values, null, 2));
              formikHelpers.resetForm();
            }


            }

          >


            {({ values, errors, isValid, handleChange, onclick, touched, dirty }) => (
              <Form className="main-form">



                <Box height={10} />
                <Field
                  className="input"
                  name="name"
                  type="name"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Name"

                  fullwidth
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helpertext={Boolean(touched.name) && errors.name}

                />

                <Box height={10} />
                {touched.name && errors.name && <div>{errors.name}</div>}
                <Box height={20} />
                <Field
                  className="input"
                  name="Address"
                  type="Address"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Address"

                  fullwidth
                  error={Boolean(errors.Address) && Boolean(touched.Address)}
                  helpertext={Boolean(touched.Address) && errors.Address}


                />
                <Box height={10} />
                {touched.Address && errors.Address && <div>{errors.Address}</div>}
                <Box height={14} />
                {/* it is for selecting the country name */}


                <FormControl className='countryformcontrol'  >
                  <InputLabel className='countryselect' id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    name="country"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChange}
                    value={values.country}
                    error={touched.country && Boolean(errors.country)}
                    helpertext={touched.country && errors.country}
                  >
                    {countries.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>

                </FormControl>
                {touched.country && errors.country && <div>{errors.country}</div>}




                {/* radio button for selecting the gender  */}
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    name="Gender"
                    value={values.Gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>

                </FormControl>



                {/* multiple-selecting dropdown  */}
                <FormControl className='hobbiescontrol'>
                  <InputLabel id="demo-multiple-checkbox-label">Hobbies</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    name="hobbies"
                    id="demo-multiple-checkbox"
                    multiple
                    value={values.hobbies}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}

                  >
                    {hobbies.map((name) => (
                      <MenuItem key={name.value} value={name.value}>
                        <Checkbox checked={true && onclick} />
                        <ListItemText primary={name.value} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button disabled={!dirty || ! isValid} type="submit" variant="contained" color='primary' className='submitbutton'>Submit</Button>




              </Form>
            )}
          </Formik>
        </div>



     
    </>
  )
}

export default FormCom
