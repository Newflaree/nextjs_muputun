// Componets
import {
  ContactFormFields,
  ContactSubmitButton,
  Title
} from '../../components';
// Layouts
import { ShopLayout } from '../../layouts';


export const ContactView = ({
  register,
  handleSubmit,
  onSubmitMessage,
  errors,
  isSubmitting
}) => {
  return (
    <ShopLayout
      pageTitle='Contacto'
    >
      <div className="flex flex-col sm:mx-20 pb-10 mx-2 mt-10">
        <Title label='Contáctanos' />

        <form
          onSubmit={ handleSubmit( onSubmitMessage ) }
          className='flex flex-col'
        >
          <ContactFormFields
            register={ register }
            errors={ errors }
          />

          <ContactSubmitButton
            isSubmitting={ isSubmitting }
          />
        </form>
      </div>
    </ShopLayout>
  );
}
