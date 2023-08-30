import { removeToken, setToken } from '@pages/api/token';
import { loginService, registerService } from '@services/auth';
import { authAtom } from '@state/auth';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { loginSchema, registerSchema } from './schema';

const useAuth = () => {
  const [dataResult, setDataResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useRecoilState(authAtom);
  const initialValuesLogin = {
    username: '',
    password: '',
  };

  const initialValuesRegister = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    gender: 0,
    role: 'GUEST',
  };

  const { mutate: mutateLoginService } = useMutation(loginService, {
    onSuccess: (res: any) => {
      if (res) {
        setDataResult(res.data);
        setUserDetail(res.data);
        setToken(res.data.accessToken);
      }
      setIsLoading(false);
    },
    onError: (error: any) => {
      console.log(error);
      removeToken();
      setIsLoading(false);
    },
  });

  const { mutate: mutateRegisterService } = useMutation(registerService, {
    onSuccess: (res: any) => {
      if (res) {
        console.log(res.data);
      }
      setIsLoading(false);
    },
    onError: (error: any) => {
      console.log(error);
      removeToken();
      setIsLoading(false);
    },
  });

  const onSubmitLogin = (values: any) => {
    setIsLoading(true);
    mutateLoginService(values);
  };

  const onSubmitRegister = (values: any) => {
    setIsLoading(true);
    mutateRegisterService(values);
  };

  const { handleSubmit, errors, handleChange, touched, values, setFieldValue } = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: loginSchema,
    onSubmit: onSubmitLogin,
  });

  const {
    handleSubmit: handleSubmitRegister,
    errors: errorsRegister,
    handleChange: handleChangeRegister,
    touched: touchedRegister,
    values: valuesRegister,
    setFieldValue: setFieldValueRegister,
  } = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: onSubmitRegister,
  });

  return [
    {
      errors,
      dataResult,
      isLoading,
      touched,
      values,
      userDetail,
      errorsRegister,
      touchedRegister,
      valuesRegister,
    },
    { handleSubmit, handleChange, handleChangeRegister, handleSubmitRegister, setFieldValue, setFieldValueRegister },
  ] as const;
};

export default useAuth;
