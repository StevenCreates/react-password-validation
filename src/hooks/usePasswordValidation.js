import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  firstPassword = "",
  secondPassword = "",
}) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    setValidLength(firstPassword.length >= 8 ? true : false);
    setHasNumber(/\d/.test(firstPassword));
    setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    setMatch(firstPassword && firstPassword === secondPassword);
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
  }, [firstPassword, secondPassword]);

  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
};
