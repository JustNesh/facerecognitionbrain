const validateEmail = (inputString) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(inputString)) {
      return false;
    } else {
      return true;
    }
  }

export default validateEmail