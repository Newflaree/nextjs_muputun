// React
import {
  useEffect,
  useState
} from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAlert } from '@/presentation/shared';
import { useProductStore } from '../state';
import type { ContactMessageDto } from '@/core';

const resetForm = (): ContactMessageDto => {
  return {
    name: '',
    lastName: '',
    emailAddress: '',
    subject: '',
    message: ''
  }
}

export const useContactForm = () => {
  const { productName, clearProductName } = useProductStore();
  const [ isSubmitting, setIsSubmitting ] = useState( false );
  const { showError, showSuccess } = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactMessageDto>({
    defaultValues: {
      name: '',
      lastName: '',
      emailAddress: '',
      subject: productName ? `Consulta sobre ${ productName }` : '',
      message: ''
    }
  });

  useEffect( () => {
    clearProductName();
  }, [ clearProductName ] );

  const onSubmitMessage: SubmitHandler<ContactMessageDto> = async ( formData ) => {
    setIsSubmitting( true );

    try {
      const response = await fetch( '/api/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( formData ),
      });

      const { ok, message } = await response.json();

      if ( ok ) {
        showSuccess( message );
      } else {
        showError( message );
      }

      setIsSubmitting( false );
      reset( resetForm() );

    } catch {
      setIsSubmitting( false );
      showError( 'Ocurrió un error al enviar el mensaje' );
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmitMessage
  }
}
