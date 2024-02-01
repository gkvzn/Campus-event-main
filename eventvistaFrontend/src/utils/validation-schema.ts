import * as Yup from 'yup';

const useValidationSchemaHook = () => {

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const aboutSchema = Yup.object().shape({
    name: Yup.string().required().label('name'),
    email: Yup.string().required().email().label("Email"),
    msg: Yup.string().required().min(20).label("Message"),
  })

  const reviewSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    review: Yup.string().required().min(20).label("Review"),
  })
  // { name: "", email: "", phone: "", gender: "", password: "", re_password: "", city: "", terms_and_conditions: "" }
  const signupSchema = Yup.object().shape({
    name: Yup.string().required().min(5,).max(50).label('name'),
    email: Yup.string().required().label("email"),
    phone: Yup.string().matches(phoneRegExp, 'phone number is not valid').required().min(9).max(15).label("phone"),
    gender: Yup.string().required().label("gender"),
    city: Yup.string().required().label("city"),
    password: Yup.string()
      .min(6)
      .required(),
    re_password: Yup.string()
      .oneOf([Yup.ref('password'), ""])
      .required(),
    terms_and_conditions: Yup.string().required().label("Terms & Conditions"),
  })

  const signInSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(3).label("Password")
  })

  const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email")
  })

  const updatePasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6)
      .required(),
    repeat_password: Yup.string()
      .oneOf([Yup.ref('password'), ""])
      .required(),
  })
  // otp schema
  const otpSchema = Yup.object().shape({
    otp: Yup.number().required().label("Otp")
  })
  const contactSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    msg: Yup.string().required().min(20).label("Message"),
  })




  // change passwor schema
  const ChangePasswordSchema = Yup.object().shape({
    old_password: Yup.string()
      .required(),
    new_password: Yup.string()
      .min(6)
      .required(),
    repeat_new_password: Yup.string()
      .oneOf([Yup.ref('new_password'), ""])
      .required(),
  });




  const ContactUsFormSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(22).label("Name"),
    email: Yup.string().required().max(40).label("Email"),
    phone: Yup.string().required().min(3).max(50).label("City"),
    subject: Yup.string().required().max(100).label("subject"),
    message: Yup.string().required().max(500).label("Message"),
  });






  //contact us schema

  const SchemaContactUs = Yup.object().shape({
    first_name: Yup.string().required().min(3).max(20,).label("First name"),
    last_name: Yup.string().required().min(3).max(20).label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    phone: Yup.string().required().min(3).max(20).label("Phone"),
    message: Yup.string().required().min(10).max(400).label("Message")
  })


  // products
  // profileschema
  const profileSchema = Yup.object().shape({
    name: Yup.string().required().min(5).max(50).label("name"),
    phone: Yup.string().required().min(5).max(15).label("phone"),
    gender: Yup.string().required().label('gender'),
    city: Yup.string().required().label("city")

  })


  // add review Schema
  const addReviewSchema = Yup.object().shape({
    rating: Yup.number().required().min(1, 'Please Select The Rating.').max(5).label("Rating"),
    reviews: Yup.string().required('Please Fill Message Field.').min(10).max(1000).label("Message")
  })

  return {
    aboutSchema,
    reviewSchema,
    signupSchema,
    signInSchema,
    resetPasswordSchema,
    updatePasswordSchema,
    otpSchema,
    contactSchema,
    ChangePasswordSchema,
    ContactUsFormSchema,
    SchemaContactUs,
    profileSchema,
    addReviewSchema
  }
}

export default useValidationSchemaHook