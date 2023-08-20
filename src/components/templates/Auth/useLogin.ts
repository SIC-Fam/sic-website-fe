import { loginService } from '@services/auth';
import { authAtom } from '@state/auth';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { loginSchema } from './schema';

const useLogin = () => {
  const [dataResult, setDataResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setAuth = useSetRecoilState(authAtom);
  const initialValues = {
    username: '',
    password: '',
  };

  const { mutate: mutateLoginService } = useMutation(loginService, {
    onSuccess: (res: any) => {
      if (res) {
        setDataResult(res);
        setAuth(res.accessToken);
      }
      setIsLoading(false);
    },
    onError: (error: any) => {
      console.log(error);
      setIsLoading(false);
    },
  });

  const onSubmit = (values: any) => {
    setIsLoading(true);
    mutateLoginService(values);
  };

  const { handleSubmit, errors, handleChange, touched, values } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit,
  });

  return [
    {
      errors,
      dataResult,
      isLoading,
      touched,
      values,
    },
    { handleSubmit, handleChange },
  ] as const;
};

export default useLogin;
