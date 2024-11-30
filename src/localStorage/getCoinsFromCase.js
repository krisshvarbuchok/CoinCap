const getCoinsFromCaseLocal = () =>{
   return JSON.parse(localStorage.getItem('coins')) ?? [];
}
export default getCoinsFromCaseLocal;
