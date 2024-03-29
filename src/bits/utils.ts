
const cssPxNames = ['width','height','marginLeft','marginRight','marginTop','marginBottom']
function unitify(rule:string, value:any){
  if(cssPxNames.includes(rule) && typeof value==='number') return 'px'
  return ''
}
export function css(style) {
  return Object.keys(style).reduce((acc, key) => (
      acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + unitify(key,style[key]) + ';'
  ), '');
};