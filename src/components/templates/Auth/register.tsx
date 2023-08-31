import SICButton from '@components/atoms/Button';
import InputBox, { InputLable } from '@components/atoms/InputBox';
import { GenderType } from '@constants/enum';
import { Radio } from '@material-tailwind/react';
import Link from 'next/link';
import useAuth from './useAuth';
import AuthLayout from '@layouts/AuthLayout';

const FIELD = [
  { name: 'fullname', placeholder: 'Your username', required: true },
  { name: 'username', placeholder: 'Your password', required: true },
  { name: 'email', placeholder: 'Your password', required: true },
  { name: 'password', placeholder: 'Your password', required: true },
];

const RegisterPage = () => {
  const [values, handles] = useAuth();
  const { isLoading, errorsRegister, touchedRegister, valuesRegister } = values;
  const { handleChangeRegister, handleSubmitRegister, setFieldValueRegister } = handles;

  return (
    <AuthLayout>
      <h1 className="text-white text-xl font-semibold mb-8 text-center">Register account</h1>
      <form onSubmit={handleSubmitRegister}>
        {FIELD.map(({ name, placeholder, required }) => (
          <InputBox
            key={name}
            name={name}
            isRequired={required}
            errorLabel={errorsRegister[name]}
            placeholder={placeholder}
            value={valuesRegister[name]}
            onChange={handleChangeRegister}
            error={!!touchedRegister[name] && !!errorsRegister[name]}
          />
        ))}
        <InputLable isRequired text="You are" />
        <div className="flex">
          <Radio
            onChange={() => setFieldValueRegister('gender', GenderType.Male)}
            color="orange"
            value={GenderType.Male}
            name="gender"
            label="Male"
            defaultChecked
          />
          <Radio
            onChange={() => setFieldValueRegister('gender', GenderType.Female)}
            color="orange"
            value={GenderType.Female}
            name="gender"
            label="Female"
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
    </AuthLayout>
  );
};

export default RegisterPage;
