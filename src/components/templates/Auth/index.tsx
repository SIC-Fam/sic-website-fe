import SICButton from '@components/atoms/Button';
import InputBox from '@components/atoms/InputBox';
import AuthLaytout from '@layouts/AuthLaytout';
import { formatToPrimaryText } from '@utils/common';
import parse from 'html-react-parser';
import Link from 'next/link';
import useLogin from './useLogin';

const FIELD = [
  { name: 'username', placeholder: 'Your username', required: true },
  { name: 'password', placeholder: 'Your password', required: true },
];

const AuthPage = () => {
  const [values, handles] = useLogin();
  const { isLoading, errors, touched } = values;
  const { handleSubmit, handleChange } = handles;
  return (
    <AuthLaytout>
      <h1 className="text-white text-xl font-semibold mb-8 text-center">
        Welcome to
        <br /> {parse(formatToPrimaryText('Student Informatic Club', ['Student Informatic Club']))}
      </h1>
      <form action="" onSubmit={handleSubmit}>
        {FIELD.map(({ name, placeholder, required }) => (
          <InputBox
            key={name}
            name={name}
            isRequired={required}
            errorLabel={errors[name]}
            placeholder={placeholder}
            value={values[name]}
            onChange={handleChange}
            error={!!touched[name] && !!errors[name]}
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