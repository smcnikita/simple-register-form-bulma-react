import { useState } from 'react';
import useValidator from '@/views/home/hooks/useValidator';
import useBlur from '@/views/home/hooks/useBlur';
import { defaultForm, defaultError } from '@/views/home/utils/defaultValues';
import useChangePhone from '@/views/home/hooks/useChangePhone';
import Layout from './layout/Layout';

import type { IError, IForm } from '@/views/home/types';
import Footer from './Footer';
import { FormItem } from '@/components/form';
import useHandleSubmit from '../hooks/useHandleSubmit';

export default function HomeView() {
  const [form, setForm] = useState<IForm>(defaultForm);
  const [errors, setErrors] = useState<IError>(defaultError);

  const { checkValidForm } = useValidator({ form, setErrors });
  const { onBlur } = useBlur({ checkValidForm, setForm });
  const { onChangePhone } = useChangePhone({ setForm });
  const { handleSubmit } = useHandleSubmit({ form, checkValidForm, setForm });

  return (
    <Layout cb={handleSubmit}>
      {/* Электронная почта */}
      <FormItem
        type="email"
        placeholder="example@email.ru"
        value={form.email}
        label="Электронная почта"
        error={errors.email}
        isShowError={errors.email !== ''}
        isGlobalShowError={form.isShowErrors}
        onBlur={onBlur}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
      />
      {/* Пароль */}
      <FormItem
        type="password"
        placeholder="**********"
        value={form.password}
        label="Пароль"
        error={errors.password}
        isShowError={errors.password !== ''}
        isGlobalShowError={form.isShowErrors}
        onBlur={onBlur}
        onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
      />
      {/* Повторите пароль */}
      <FormItem
        type="password"
        placeholder="**********"
        value={form.repeatPassword}
        label="Повторите пароль"
        error={errors.repeatPassword}
        isShowError={errors.repeatPassword !== ''}
        isGlobalShowError={form.isShowErrors}
        onBlur={onBlur}
        onChange={(event) => setForm((prev) => ({ ...prev, repeatPassword: event.target.value }))}
      />
      {/* Телефон */}
      <FormItem
        type="text"
        placeholder="+79999999999"
        value={form.phone}
        label="Телефон"
        error={errors.phone}
        isShowError={errors.phone !== ''}
        isGlobalShowError={form.isShowErrors}
        onBlur={onBlur}
        onChange={onChangePhone}
      />

      <Footer />
    </Layout>
  );
}
