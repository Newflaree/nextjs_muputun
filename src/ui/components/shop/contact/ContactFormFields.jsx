// React
import {
  Fragment,
} from 'react';


export const ContactFormFields = ({
  errors,
  register
}) => {
  return (
    <Fragment>
      <label>Nombre</label>

      <span className='text-red-400'>{ errors.name?.message }</span>

      <input
        className='px-5 py-2 border bg-gray-100 rounded mb-5'
        type='text'
        { ...register(
          'name',
          {
            required: 'Este campo es obligatorio'
          }
        )}
      />

      <label>Apellido</label>

      <span className='text-red-400'>{ errors.lastName?.message }</span>

      <input
        className='px-5 py-2 border bg-gray-100 rounded mb-5'
        type='text'
        { ...register(
          'lastName',
          {
            required: 'Este campo es obligatorio'
          }
        )}
      />

      <label>Correo Electónico</label>

      <span className='text-red-400'>{ errors.emailAddress?.message }</span>

      <input
        className='px-5 py-2 border bg-gray-100 rounded mb-5'
        type='email'
        { ...register(
          'emailAddress',
          {
            required: 'Este campo es obligatorio'
          }
        )}
      />

      <label>Asunto</label>

      <span className='text-red-400'>{ errors.subject?.message }</span>

      <input
        className='px-5 py-2 border bg-gray-100 rounded mb-5'
        type='text'
        { ...register(
          'subject',
          {
            required: 'Este campo es obligatorio'
          }
        )}
      />

      <label>Mensaje</label>

      <span className='text-red-400'>{ errors.message?.message }</span>

      <textarea
        className='px-5 py-2 border bg-gray-100 rounded mb-5'
        rows={ 4 }
        { ...register(
          'message',
          {
            required: 'Este campo es obligatorio'
          }
        )}
      />
    </Fragment>
  );
}
