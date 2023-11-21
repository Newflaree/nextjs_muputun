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

/**
 * `ContactPage` Page Component
 * 
 * Página de contacto diseñada para permitir a los usuarios enviar mensajes o consultas.
 * Integra un formulario de contacto y gestiona la lógica de envío y respuesta.
 * 
 * Utiliza `useForm` de React Hook Form para manejar el estado y la validación del formulario,
 * y Sweet Alert (a través de `withReactContent`) para mostrar notificaciones estilizadas sobre
 * el resultado del envío del formulario.
 * 
 * El componente `MainLayout` se emplea para mantener la coherencia en el diseño de la aplicación,
 * incluyendo elementos comunes como la barra de navegación y el pie de página.
 * 
 * `ContactView` presenta el formulario de contacto, pasando los métodos y estados necesarios
 * para su funcionamiento, como los métodos de registro y envío, los errores del formulario y
 * el estado de envío.
 * 
 * La lógica de envío del formulario (`onSubmitMessage`) gestiona la interacción con un endpoint API
 * y muestra alertas basadas en la respuesta del servidor.
 * 
 * @example
 * // Ruta definida en un router
 * <Route path="/contacto" element={<ContactPage />} />
 * 
 * @returns {React.Component} Una página de contacto con formulario y manejo de envíos.
 */
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
