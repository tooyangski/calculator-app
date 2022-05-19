export const romanize = (num: string) => {
  let digits = String(num).split('');
  let key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  let roman = '';
  let i = 3;

  while (i--) {
    let index: number = Number(digits.pop()) + i * 10;
    roman = (key[index] || '') + roman;
  }
  return Array(+digits.join('') + 1).join('M') + roman;
};

// export const deromanize = (str: string)  => {
//   var str = str.toUpperCase();
//   var validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
//   var token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
//   var key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
//   var num = 0;
//   if (!(str && validator.test(str))) return false;
//   while ( var m = token.exec(str)) {
//     let index:number = m[0];

//     num += key[index];
//   }
//   return num;
// }
