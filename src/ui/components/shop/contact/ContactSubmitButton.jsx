export const ContactSubmitButton = ({ isSubmitting }) => {
  return (
    <button
      className='btn-primary'
      type='submit'
      disabled={ isSubmitting }
    >
      { isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }
    </button>
  );
}
