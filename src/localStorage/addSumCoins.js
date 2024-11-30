const addSumCoinsLocal = (s) => {
    //console.log('local',s);
    localStorage.setItem('sumCoins', JSON.stringify(s));
}
export default addSumCoinsLocal;