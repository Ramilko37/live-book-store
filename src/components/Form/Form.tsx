import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import styles from './styles.module.css';
import {Formik} from 'formik';
import * as Yup from 'yup';

export const SignInForm = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  const onSubmit = async (data: {email: string; password: string}) => {};

  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      w={'348px'}
      h={'100vh'}
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        validateOnChange={true}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form style={{width: '100%'}} onSubmit={formik.handleSubmit}>
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              className={styles.container}
            >
              <Text as={'h3'} className={styles.title}>
                Sign In
              </Text>
              <Text as={'span'} className={styles.subtitle}>
                Only desktop version for now
              </Text>
              <FormControl isInvalid={!!formik.errors}>
                <span className={styles.placeholder}>Email</span>
                <InputGroup>
                  <Input
                    id={'email'}
                    placeholder={'email'}
                    onChange={formik.handleChange}
                    type={'text'}
                    value={formik.values.email}
                    _placeholder={{opacity: 1, color: '#E87CA7'}}
                    focusBorderColor="#D8246C"
                    className={styles.input}
                  />
                </InputGroup>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <Input
                id={'password'}
                placeholder={'Password'}
                type={'submit'}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                margin={'0 0 32px 0'}
              />
              <Button
                type={'submit'}
                children={'Sign In'}
                width={'100%'}
                borderRadius={'12px'}
                fontSize={'16px'}
                lineHeight={'22px'}
                fontWeight={600}
                margin={'0 0 8px 0'}
                disabled={
                  formik.values.email === '' || formik.values.password === ''
                }
              />
            </Flex>
          </form>
        )}
      </Formik>
    </Flex>
  );
};
