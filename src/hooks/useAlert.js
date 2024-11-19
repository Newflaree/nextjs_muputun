// Sweet Alert
import Swal from 'sweetalert2';


export const useAlert = () => {
  const showSuccess = ( message = '' ) => {
    Swal.fire({
      title: message,
      icon: 'success',
      confirmButtonColor: '#1FBEE8',
      confirmButtonText: 'Aceptar'
    });
  }

  const showError = ( message = '' ) => {
    Swal.fire({
      title: message,
      icon: 'error',
      confirmButtonColor: '#1FBEE8',
      confirmButtonText: 'Aceptar'
    });
  }

  return {
    showError,
    showSuccess
  }
}

