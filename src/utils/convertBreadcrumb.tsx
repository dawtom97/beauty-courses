export const convertBreadcrumb = (string: any) => {

  if (string.includes('wyniki')) return 'Wyniki';
  if(string.length > 10 && window.innerWidth < 992) return string.slice(0,10) + '...'

  return string.replace(/-/g, ' ').replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü');
};
