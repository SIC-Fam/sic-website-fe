import * as yup from 'yup';
const loginSchema = yup.object().shape({
  username: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});

const registerSchema = yup.object().shape({
  fullname: yup.string().required('This field is required'),
  username: yup.string().required('This field is required'),
  email: yup.string().email('Invalid email').required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .matches(/.*\d.*/, 'Your password need to have at least 1 number'),
  gender: yup.boolean().required('This field is required'),
});

export { loginSchema, registerSchema };
