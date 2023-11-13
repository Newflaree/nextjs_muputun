// React Hook Form
import { useForm } from 'react-hook-form';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { ContactView } from '@/views';


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

  const onSubmitMessage = async ( formData ) => {
    const response = await fetch( '/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( formData ),
    });

    const data = await response.json();
    console.log({ data });

    reset( resetForm );
  }

  return (
    <MainLayout
      pageTitle='Contáctanos'
      pageDesc='Contacta con müpütun a través de nuestro sistema de contacto'
    >
      <ContactView
        onSubmitMessage={ onSubmitMessage }
        register={ register }
        handleSubmit={ handleSubmit }
        errors={ errors }
      />
    </MainLayout>
  );
}

export default ContactPage;
