import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  
  firstPassword = "",
  secondPassword = "",
  requiredLength = 8,
    
  }) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [match, setMatch] = useState(null);
    
  useEffect(() => {
    
  setValidLength(firstPassword.length >= requiredLength ? true : false);
  setUpperCase(firstPassword.toLowerCase() !== firstPassword);
  setLowerCase(firstPassword.toUpperCase() !== firstPassword);
  setHasNumber(/\d/.test(firstPassword));
  setMatch(firstPassword && firstPassword === secondPassword);
  setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
    
  }, [firstPassword, secondPassword, requiredLength]);
    
  return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
  };