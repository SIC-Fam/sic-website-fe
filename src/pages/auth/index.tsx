import { formatToPrimaryText } from '@utils/common';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import InputBox from '@components/InputBox';
import SICButton from '@components/Button';
import Link from 'next/link';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { login } from '@services/auth';
import AuthLaytout from '@layouts/AuthLayout';
import { useRecoilState } from 'recoil';
import { authAtom } from '@state/auth';
import { useRouter } from 'next/router';

const FIELD = [
  { name: 'username', placeholder: 'Your username', required: true },
  { name: 'password', placeholder: 'Your password', required: true },
];

const AuthPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setAuth] = useRecoilState(authAtom);

  const validationSchema = yup.object().shape({
    username: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      login(values).then((response) => {
        if (response?.status === 200) {
          router.push('/');
          setAuth(response.data.accessToken);
        }
        setIsLoading(false);
      });
    },
  });
  return (
    <AuthLaytout>
      <h1 className="text-white text-xl font-semibold mb-8 text-center">
        Welcome to
        <br /> {parse(formatToPrimaryText('Student Informatic Club', ['Student Informatic Club']))}
      </h1>
      <form action="" onSubmit={formik.handleSubmit}>
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
        <p className="text-right mt-2 text-primary">
          <Link className="text-xs" href="/auth/register">
            Dont have an account?
          </Link>
        </p>
        <SICButton isLoading={isLoading} type="submit" className="mt-4 w-full">
          Sign in
        </SICButton>
      </form>
    </AuthLaytout>
  );
};

export default AuthPage;
