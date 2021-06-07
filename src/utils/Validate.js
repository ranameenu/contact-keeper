export const Validate = (input) => {
  const errors = {};
  const { name, email, password, confirmPassword, phone, type } = input;

  //   Name
  if (name === '') {
    errors.name = 'Name required';
  }

  //   Email
  if (email === '') {
    errors.email = 'Enter your email id';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Email is not valid';
  }

  //   Password

  if (password === '') {
    errors.password = 'Enter password';
  } else if (password.length < 6) {
    errors.password = 'Password is too short';
  }

  // Confirm password

  if (confirmPassword === '') {
    errors.confirmPassword = 'This field is required';
  } else if (confirmPassword && confirmPassword !== password) {
    errors.confirmPassword = 'Password are not same';
  }

  // Phone
  if (phone === '') {
    errors.phone = "Please enter user's phone number";
  } else if (phone.length !== 10) {
    errors.phone = 'Enter valid phone number';
  }

  // Type
  if (type === '') {
    errors.type = 'Enter type of contact you want to save';
  }

  errors.count = Object.keys(errors).length;
  return errors;
};
export default Validate;
