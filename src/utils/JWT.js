export class JWT {
  static get = () => localStorage.getItem('JWT');
  static set = (value) => localStorage.setItem('JWT', value);
  static remove = () => localStorage.removeItem('JWT');
}
