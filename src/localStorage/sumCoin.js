const sumCoinLocal = () => {
    //console.log(localStorage.getItem('sumCoins'));
    return JSON.parse(localStorage.getItem('sumCoins')) ?? 0;
}
export default sumCoinLocal;