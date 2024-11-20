// React
import {
  useEffect,
  useState
} from 'react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Hooks
import { useAlert } from './useAlert';
// Store
import { useProductStore } from '@/store';

const resetForm = () => {
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
  } = useForm({
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

  const onSubmitMessage = async ( formData ) => {
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

      ( ok )
        ? showSuccess( message )
        : showError( message )

      setIsSubmitting( false );
      reset( resetForm );

    } catch ( error ) {
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
