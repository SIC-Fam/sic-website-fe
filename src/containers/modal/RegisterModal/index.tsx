import SICModal, { SICModalProps } from '@components/Modal';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SICButton from '@components/Button';
import InputBox, { InputLable } from './InputBox';
import SICSelect from '@components/Select';
import ErrorIcon from '@components/icons/Error';
import clsx from 'clsx';

interface RegisterModalProps extends Omit<SICModalProps, 'children'> {}

const FIELD = [
  { name: 'fullName', placeholder: 'Your fullname' },
  { name: 'studentCode', placeholder: 'Your student code' },
  { name: 'email', placeholder: 'Your email' },
  { name: 'birthday', placeholder: 'Your birthday' },
  { name: 'contactInformation', placeholder: 'Your contact information' },
];

const REGISTER_BAN = [
  {
    label: 'Study group',
    value: 'study',
  },
  {
    label: 'Technique group',
    value: 'technique',
  },
  {
    label: 'Media group',
    value: 'media',
  },
  {
    label: 'Support group',
    value: 'support',
  },
];

const RegisterModal = (props: RegisterModalProps) => {
  const [groupChecked, setGroupChecked] = useState<string[]>([]);

  const validationSchema = yup.object().shape({
    fullName: yup.string().required('This field is required'),
    studentCode: yup.string().required('This field is required'),
    email: yup.string().email('Invalid email').required('This field is required'),
    birthday: yup.string().required('This field is required'),
    contactInformation: yup.string().required('This field is required'),
    groups: yup.array().required().min(1, 'This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      studentCode: '',
      email: '',
      birthday: '',
      contactInformation: '', // facebookLink or phone number
      groups: [],
      cv: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log({ ...values });
    },
  });

  const onSelectGroup = (value: string) => {
    setGroupChecked((prev) => (prev.includes(value) ? [...prev.filter((_v) => _v !== value)] : [...prev, value]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formik.setFieldValue('groups', groupChecked);

    formik.handleSubmit();
  };

  return (
    <SICModal className="border border-primary shadow-primary w-[950px]" {...props}>
      <h1 className="text-white text-4xl font-medium mb-2">
        Become a member of <span className="text-primary">SIC Gang</span>
      </h1>
      <p className="mb-2">
        Please fill all the blank below so that we could contact with you when your information is register successfully
      </p>
      <p style={{ fontStyle: 'italic' }} className="text-xs text-white mb-8">
        This form will automatically close after
        <span className="text-primary underline"> 3 </span>days
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {FIELD.map(({ name, placeholder }) => (
            <InputBox
              key={name}
              name={name}
              isRequired={true}
              errorLabel={formik.errors[name]}
              placeholder={placeholder}
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={!!formik.touched[name] && !!formik.errors[name]}
            />
          ))}
          <div>
            <InputLable isRequired text="Which group do you want to join" />
            <SICSelect
              multiple
              name="groups"
              label="Choose here"
              onChangeMultiSelect={onSelectGroup}
              value={groupChecked}
              data={REGISTER_BAN}
            />
            {!!formik.errors.groups && (
              <div className=" text-[10px] text-error italic mt-2 items-center flex">
                <ErrorIcon />
                <span className="ml-1 ">{formik.errors.groups}</span>
              </div>
            )}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <InputLable isRequired text="Let us know more about you by putting your CV here" />
          <input
            type="file"
            accept=".pdf"
            className={clsx(
              'border bg-transparent py-2 px-4 w-full rounded-lg outline-none text-white placeholder:text-text focus:border-primary border-text',
            )}
          />
        </div>

        <div className="flex">
          <SICButton onClick={props?.onClose} type="button" className="w-full" color="inherit" variant="text">
            Cancel
          </SICButton>
          <div className="w-8"></div>
          <SICButton className="w-full" type="submit">
            Join
          </SICButton>
        </div>
      </form>
    </SICModal>
  );
};

export default RegisterModal;
