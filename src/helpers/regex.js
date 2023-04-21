export const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
export const apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+([ '-][a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
export const emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z0-9]{2,})+$/;
export const passwordRegex = /^(?=.*[!@#$%^&*()\-_=+{}[\]\\|;:'",.<>/?])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
