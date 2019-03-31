export function companyLogo(carrier) {
  let className = '';
  
  if ( carrier === 'TK' ) {
    className = 'turkish-logo ticket__turkish-logo';
  }
  else if ( carrier === 'S7' ) {
    className = 's7-logo ticket__s7-logo';
  }
  else if ( carrier === 'SU' ) {
    className = 'su-logo ticket__su-logo';
  }
  else if ( carrier === 'BA' ) {
    className = 'ba-logo ticket__ba-logo';
  }
  
  return className;
}
