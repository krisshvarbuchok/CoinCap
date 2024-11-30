const stylesFunction = (str) =>{
        if (parseFloat(str) > 0) {
            return 'positiveChange';
        } else if (parseFloat(str) < 0) {
            return 'negativeChange';
        } else {
            return 'neutralChange';
        }
}
export default stylesFunction;