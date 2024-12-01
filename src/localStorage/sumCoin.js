const sumCoinLocal = () => {
    return JSON.parse(localStorage.getItem('sumCoins')) ?? 0;
}
export default sumCoinLocal;