// Hooks
import { useContactForm } from '@/presentation';
// Views
import { ContactView } from '@/presentation';


const ContactPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmitMessage,
    isSubmitting
  } = useContactForm();

  return <ContactView
    onSubmitMessage={ onSubmitMessage }
    register={ register }
    handleSubmit={ handleSubmit }
    errors={ errors }
    isSubmitting={ isSubmitting }
  />
}

export default ContactPage;
