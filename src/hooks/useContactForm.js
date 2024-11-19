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
      /*
      const response = await fetch( '/api/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( formData ),
      });

      const {
        ok,
        message
      } = await response.json();
        * */
      const ok = true;
      const message = 'Mensaje enviado con éxito'

      setTimeout( () => {
        ( ok )
          ? showSuccess( message )
          : showError( message )
      }, 2000 );

      reset( resetForm );
    } catch ( error ) {
      showError( 'Ocurrió un error al enviar el mensaje' );
    } finally {
      setIsSubmitting( false );
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
