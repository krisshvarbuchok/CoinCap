const addSumCoinsLocal = (s) => {
    localStorage.setItem('sumCoins', JSON.stringify(s));  
}
export default addSumCoinsLocal;