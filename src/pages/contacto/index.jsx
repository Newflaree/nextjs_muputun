// React Hook Form
import { useForm } from 'react-hook-form';
// Sweet Alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ContactView } from '@/views';
import {useState} from 'react';


const MySwal = withReactContent( Swal );

const resetForm = () => {
  return {
    name: '',
    lastName: '',
    emailAddress: '',
    subject: '',
    message: ''
  }
}

const ContactPage = () => {
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
      subject: '',
      message: ''
    }
  });

  const [ isSubmitting, setIsSubmitting ] = useState( false );

  const onSubmitMessage = async ( formData ) => {
    setIsSubmitting( true );
    try {
      const response = await fetch( '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( formData ),
      });


      const { ok, message } = await response.json();

      ( ok === true )
        ? MySwal.fire({
            title:  message,
            icon: 'success',
            confirmButtonColor: '#1FBEE8',
            confirmButtonText: 'Aceptar',
          })
        : MySwal.fire({
            title: message,
            icon: 'error',
            confirmButtonColor: '#1FBEE8',
            confirmButtonText: 'Aceptar',
          });

      setIsSubmitting( false );
      reset( resetForm );
    
    } catch ( error ) {
      setIsSubmitting( false );
      reset( resetForm );
    }
  }

  return (
    <MainLayout
      pageTitle='Contáctanos'
      pageDesc='Contacta con müpütun a través de nuestro sistema de contacto para resolver tus dudas'
    >
      <ContactView
        onSubmitMessage={ onSubmitMessage }
        register={ register }
        handleSubmit={ handleSubmit }
        errors={ errors }
        isSubmitting={ isSubmitting }
      />
    </MainLayout>
  );
}

export default ContactPage;
