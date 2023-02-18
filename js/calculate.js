function getValue(inputId1, inputId2) {
  const inputString1 = document.getElementById(inputId1);
  const inputFloat1 = parseFloat(inputString1.value);
  const inputString2 = document.getElementById(inputId2);
  const inputFloat2 = parseFloat(inputString2.value);
      const area = inputFloat1 * inputFloat2;
      
  return area;
      
}
