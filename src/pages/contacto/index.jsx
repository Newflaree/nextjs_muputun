// Hooks
import { useContactForm } from '@/hooks';
// Views
import { ContactView } from '@/ui/views';


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
