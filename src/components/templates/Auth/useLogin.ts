import { removeToken, setToken } from '@pages/api/token';
import { loginService } from '@services/auth';
import { authAtom } from '@state/auth';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { loginSchema } from './schema';

const useLogin = () => {
  const [dataResult, setDataResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useRecoilState(authAtom);
  const initialValues = {
    username: '',
    password: '',
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
      userDetail,
    },
    { handleSubmit, handleChange },
  ] as const;
};

export default useLogin;
