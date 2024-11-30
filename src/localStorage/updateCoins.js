const updateCoinsInLocal = (coins) => {
    localStorage.setItem('coins', JSON.stringify(coins));
};
export default updateCoinsInLocal;