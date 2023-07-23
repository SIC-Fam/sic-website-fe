import React, { useState } from 'react';
import InputBox, { InputLable } from '@components/InputBox';
import SICButton from '@components/Button';
import Link from 'next/link';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AuthLaytout from '@layouts/AuthLayout';
import { useRouter } from 'next/router';
import { Radio } from '@material-tailwind/react';
import { GenderType } from '@constants/enum';
import { register } from '@services/auth';

const FIELD = [
  { name: 'fullname', placeholder: 'Your username', required: true },
  { name: 'username', placeholder: 'Your password', required: true },
  { name: 'email', placeholder: 'Your password', required: true },
  { name: 'password', placeholder: 'Your password', required: true },
];

const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validationSchema = yup.object().shape({
    fullname: yup.string().required('This field is required'),
    username: yup.string().required('This field is required'),
    email: yup.string().email('Invalid email').required('This field is required'),
    password: yup
      .string()
      .required('This field is required')
      .matches(/.*\d.*/, 'Your password need to have at least 1 number'),
    gender: yup.boolean().required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      gender: 0,
      role: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      register(values).then((response) => {
        if (response?.status === 200) {
          router.push('/auth');
        }
        setIsLoading(false);
      });
    },
  });
  return (
    <AuthLaytout>
      <h1 className="text-white text-xl font-semibold mb-8 text-center">Register account</h1>
      <form onSubmit={formik.handleSubmit}>
        {FIELD.map(({ name, placeholder, required }) => (
          <InputBox
            key={name}
            name={name}
            isRequired={required}
            errorLabel={formik.errors[name]}
            placeholder={placeholder}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={!!formik.touched[name] && !!formik.errors[name]}
          />
        ))}
        <InputLable isRequired text="You are" />
        <div className="flex">
          <Radio
            onChange={() => formik.setFieldValue('gender', GenderType.Male)}
            color="orange"
            value={GenderType.Male}
            name="gender"
            label="Male"
            defaultChecked
            labelProps={{
              class: 'text-xs sm:text-sm',
            }}
          />
          <Radio
            onChange={() => formik.setFieldValue('gender', GenderType.Female)}
            color="orange"
            value={GenderType.Female}
            name="gender"
            label="Female"
            labelProps={{
              class: 'text-xs sm:text-sm',
            }}
          />
        </div>
        <p className="text-right mt-2 text-primary">
          <Link className="text-xs" href="/auth">
            Alrady have an account?
          </Link>
        </p>
        <SICButton isLoading={isLoading} type="submit" className="mt-4 w-full">
          Register
        </SICButton>
      </form>
    </AuthLaytout>
  );
};

export default RegisterPage;
