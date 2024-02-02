import Swal from "sweetalert2";

export const showToast = (toastTime: number, iconToast: string, message: string): void => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: toastTime,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: iconToast === 'success' ? 'success' : 
      (iconToast === 'info' ? 'info' :
      (iconToast === 'warning' ? 'warning' :
      (iconToast === 'question' ? 'question' : 'error'))),
    title: message
  });
};