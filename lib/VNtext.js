export function ConvertViToEn(str, toUpperCase = false) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return toUpperCase ? str.toUpperCase() : str;
}
// export const checkIfAIsInB = (string, stringToCheck) => {
//   let split = stringToCheck.split('').filter((i) => i !== ''); //  [c, a, t, g, o, i, n, h, u, o,m]
//   const map = new Map(split.map((i) => [i, 1]));
//   split = string.split('').filter((i) => i !== ''); // ['cat', nhuom']
//   let result = true;
//   for (let i of split) {
//     if (!map.has(i)) {
//       return false;
//     }
//   }
//   return result;
// };

export const checkIfAIsInB = (string, stringToCheck) => {
  if (string.length === 0) {
    return true;
  } else {
    let split = string.split(' ').filter((i) => i !== '');
    let score = 0;
    for (let i = 0; i < split.length; i++) {
      let position = stringToCheck.search(split[i]);
      if (position >= 0) score += 1;
    }
    if (score === 0) {
      return false;
    }
    return true;
  }
};
