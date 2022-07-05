import React from 'react'

const ValidarCnpj: Function = (cnpjRaw: string): boolean => {

  let cnpj = clearNonNumbers(cnpjRaw);

  if (!isValidCpnj(cnpj))
    return false;

  // Valida DVs
  let size: number = cnpj.length - 2
  let numbers: string = cnpj.substring(0, size);
  let digits: string = cnpj.substring(size);
  let sum: number = 0;
  let pos: number = size - 7;

  for (let i: number = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2)
      pos = 9;
  }

  let resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (resultado !== Number(digits.charAt(0)))
    return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i: number = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (resultado !== Number(digits.charAt(1)))
    return false;

  return true;


}

export default ValidarCnpj


function clearNonNumbers(cnpjStr: string): string {
  return cnpjStr.replace(/[^\d]+/g, '');
}

function isValidCpnj(cnpj: string): boolean {
  if (cnpj == '')
    return false;

  if (cnpj.length != 14)
    return false;

  if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" ||
    cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" ||
    cnpj == "88888888888888" || cnpj == "99999999999999")
    return false;

  return true;
}
