import { useState, useEffect } from "react";
export const usePasswordValidation = ({
  firstPassword = "",
  secondPassword = "",
  requiredLength = 8,
  numberValidation = true,
  lowercaseValidation = true,
  uppercaseValidation = true,
  specialcharacterValidation = true,
  lengthValidation = true,
}) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [match, setMatch] = useState(null);

  useEffect(() => {
    lengthValidation &&
      setValidLength(firstPassword.length >= requiredLength ? true : false);
    uppercaseValidation &&
      setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    lowercaseValidation &&
      setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    numberValidation && setHasNumber(/\d/.test(firstPassword));
    specialcharacterValidation &&
      setSpecialChar(
        /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword)
      );
    setMatch(firstPassword && firstPassword === secondPassword);
  }, [
    firstPassword,
    secondPassword,
    requiredLength,
    lengthValidation,
    uppercaseValidation,
    lowercaseValidation,
    numberValidation,
    specialcharacterValidation,
  ]);

  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
};
