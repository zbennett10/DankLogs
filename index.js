module.exports = function({dispatch}) {
    return next => action => {
        const returnValue = next(action);
        console.log('%cAction:','color: blue; font-size: x-large', action);
        console.log('%cAction type:', 'color: blue; font-size: x-large', action.type);
        console.log('%cAction payload:', 'color: blue; font-size: x-large', action.payload);
        if(!action.payload.hasOwnProperty('length')) {
            for(let prop in action.payload) {
                console.log('%cProperty: Value', 'color: red; font-size: medium', `${prop}: ${action.payload[prop]}`);
            }
        }

        if(action.payload.hasOwnProperty('length') && typeof action.payload !== 'string') {
            action.payload.forEach(item => {
                console.log(`%cItem at index ${action.payload.indexOf(item)}:`, item);
            });
        }
        return returnValue;
    }
}
