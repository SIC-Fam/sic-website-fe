import SICButton from '@components/atoms/Button';
import SICModal, { SICModalProps } from '@components/atoms/Modal';
import SICSelect from '@components/atoms/Select';
import ErrorIcon from '@components/atoms/icons/Error';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import InputBox, { InputLable } from '@components/atoms/InputBox';
import useCTV from './useCTV';
import { pick } from 'lodash';
import { phoneNumberValidate } from '@constants/regex';
import moment from 'moment';
import clsx from 'clsx';

interface RegisterModalProps extends Omit<SICModalProps, 'children'> {}

const FIELD = [
  { name: 'name', placeholder: 'Nguyen Van A', required: true },
  { name: 'studentCode', placeholder: '2151062838', required: true },
  { name: 'idClass', placeholder: '63CNTT1', required: true },
  { name: 'email', placeholder: 'Your email', required: true },
  { name: 'birthday', placeholder: 'Your birthday', required: true },
  { name: 'contactInformation', placeholder: 'Facebook link or phone number', required: true },
];

const REGISTER_BAN = [
  {
    label: 'Technical vice group',
    value: 'technical_vice',
  },
  {
    label: 'Technical group',
    value: 'technical',
  },
  {
    label: 'Media group',
    value: 'media',
  },
];

const RegisterModal = (props: RegisterModalProps) => {
  const [groupChecked, setGroupChecked] = useState<string[]>([]);

  const { mutate, isLoading } = useCTV();

  const validationSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    studentCode: yup.string().required('This field is required'),
    email: yup.string().email('Invalid email').required('This field is required'),
    idClass: yup.string().required('This field is required'),
    birthday: yup.string().required('This field is required'),
    contactInformation: yup.string().required('This field is required'),
    team: yup.array().required().min(1, 'This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      studentCode: '',
      email: '',
      birthday: '',
      contactInformation: '', // facebookLink or phone number
      team: [],
      idClass: '',
      // cv: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const body = {
        msv: values.studentCode,
        birthday: moment.utc(values.birthday, 'DD/MM/YYYY').toDate(),
        ...pick(values, ['name', 'idClass', 'name', 'email', 'team']),
        ...(values.contactInformation.match(phoneNumberValidate)
          ? { numberPhone: values.contactInformation }
          : { linkFb: values.contactInformation }),
      };
      mutate(body);
    },
  });

  const onSelectGroup = (value: string) => {
    const newVal = groupChecked.includes(value)
      ? [...groupChecked.filter((_v) => _v !== value)]
      : [...groupChecked, value];
    formik.setFieldValue('team', newVal);
    setGroupChecked(newVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formik.setFieldValue('groups', groupChecked);

    formik.handleSubmit();
  };

  const handleClose = () => {
    formik.resetForm();
    setGroupChecked([]);
    props?.onClose();
  };

  return (
    <>
      <SICModal
        style={{ width: '995px' }}
        className="border border-primary shadow-glove"
        {...props}
        onClose={handleClose}
      >
        <div className="p-6 md:p-[3.5rem]">
          <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-medium mb-2">
            Become a member of <span className="text-primary">SIC Gang</span>
          </h1>
          <p className="mb-2 text-xs md:text-sm">
            Please fill all the blank below so that we could contact with you when your information is register
            successfully
          </p>
          <p style={{ fontStyle: 'italic' }} className="text-xs text-white mb-8">
            This form will automatically close after <span className="text-primary underline">3</span> days
          </p>
          <form onSubmit={handleSubmit}>
            <div className="md:grid grid-cols-2 gap-4">
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
              <div>
                <InputLable isRequired text="Which group do you want to join" />
                <SICSelect
                  multiple
                  name="team"
                  label="Choose here"
                  onChangeMultiSelect={onSelectGroup}
                  value={groupChecked}
                  data={REGISTER_BAN}
                />
                {!!formik.errors.team && (
                  <div className=" text-[10px] text-error italic mt-2 items-center flex">
                    <ErrorIcon />
                    <span className="ml-1 ">{formik.errors.team}</span>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="mb-8 mt-4">
              <InputLable isRequired text="Let us know more about you by putting your CV here" />
              <input
                type="file"
                accept=".pdf"
                className={clsx(
                  'border bg-transparent py-2 px-4 w-full rounded-lg outline-none text-white placeholder:text-text focus:border-primary border-text',
                )}
              />
            </div> */}

            <div className="flex mt-8">
              <SICButton onClick={handleClose} type="button" className="w-full" color="inherit" variant="text">
                Cancel
              </SICButton>
              <div className="w-8"></div>
              <SICButton
                className={clsx(['w-full'], {
                  isLoading: 'pointer-events-none',
                })}
                type="submit"
              >
                {isLoading ? `loading...` : `Join`}
              </SICButton>
            </div>
          </form>
        </div>
      </SICModal>
    </>
  );
};

export default RegisterModal;
