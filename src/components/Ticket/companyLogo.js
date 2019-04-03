export function companyLogo(carrier) {
  let className = '';
  
  if ( carrier === 'TK' ) {
    className = 'turkish-logo ticket__logo';
  }
  else if ( carrier === 'S7' ) {
    className = 's7-logo ticket__logo';
  }
  else if ( carrier === 'SU' ) {
    className = 'su-logo ticket__logo';
  }
  else if ( carrier === 'BA' ) {
    className = 'ba-logo ticket__logo';
  }
  
  return className;
}
