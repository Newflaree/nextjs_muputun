import { MupuButton } from '@/presentation/shared';

type ContactSubmitButtonProps = {
  isSubmitting: boolean;
};

export const ContactSubmitButton = ({ isSubmitting }: ContactSubmitButtonProps) => {
  return (
    <MupuButton
      className='mt-8 w-full sm:w-auto'
      type='submit'
      disabled={ isSubmitting }
      variant='accent'
    >
      { isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }
    </MupuButton>
  );
}
