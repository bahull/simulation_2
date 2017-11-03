//CONSTANTS
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD= 'UPDATE_PASSWORD';
const UPDATE_PROPERTYNAME= 'UPDATE_PROPERTYNAME';
const UPDATE_PROPERTYDESCRIPT= 'UPDATE_PROPERTYDESCRIPT';
const UPDATE_ADDRESS= 'UPDATE_ADDRESS';
const UPDATE_CITY= 'UPDATE_CITY';
const UPDATE_STATE= 'UPDATE_STATE';
const UPDATE_ZIP= 'UPDATE_ZIP';
const UPDATE_IMAGEURL= 'UPDATE_IMAGEURL';
const UPDATE_LOANAMOUNT= 'UPDATE_LOANAMOUNT';
const UPDATE_MONTHLYMORTGAGE= 'UPDATE_MONTHLYMORTGAGE';
const UPDATE_DESIREDRENT= 'UPDATE_DESIREDRENT';


//ACTION BUILDERS
export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload : username //es6 shortcut for assigning a variable to an object with the same property name as the variable name
    }};

export function updatePassword(password){return {
    type: UPDATE_PASSWORD,
    payload : password
}};

export function updatePropertyName(propertyName){
    return {
    type: UPDATE_PROPERTYNAME,
    payload : propertyName
}};

export function updatePropertyDescript(propertyDescript){
    return {
    type: UPDATE_PROPERTYDESCRIPT,
    payload : propertyDescript
}};

export function updateAddress(address){
    return {
    type: UPDATE_ADDRESS,
    payload : address
}};

export function updateCity(city){
    return {
    type: UPDATE_CITY,
    payload : city
}};

export function updateState(state){
    return {
    type: UPDATE_STATE,
    payload : state
}};

export function updateZip(zip){
    return {
    type: UPDATE_ZIP,
    payload : zip
}};

export function updateImageUrl(imageUrl){
    return {
    type: UPDATE_IMAGEURL,
    payload : imageUrl
}};

export function updateLoanAmount(loanAmount){
    return {
    type: UPDATE_LOANAMOUNT,
    payload : loanAmount
}};

export function updateMonthlyMortgage(monthlyMortgage){
    return {
    type: UPDATE_MONTHLYMORTGAGE,
    payload : monthlyMortgage
}};

export function updateDesiredRent(desiredRent){
    return {
    type: UPDATE_DESIREDRENT,
    payload : desiredRent
}};

let initialState = {
    username : '',
    password: '',
    propertyName: '',
    propertyDescript: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageUrl: '',
    loanAmount: '',
    monthlyMortgage: '',
    desiredRent: ''
}
//REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return Object.assign({}, state, { username: action.payload });
        case UPDATE_PASSWORD:
            return Object.assign({}, state, { password: action.payload });
        case UPDATE_PROPERTYNAME:
            return Object.assign({}, state, { propertyName: action.payload });
        case UPDATE_PROPERTYDESCRIPT:
            return Object.assign({}, state, { propertyDescript: action.payload });
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload });
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case UPDATE_IMAGEURL:
            return Object.assign({}, state, { imageUrl: action.payload });
        case UPDATE_LOANAMOUNT:
            return Object.assign({}, state, { loanAmount: action.payload });
         case UPDATE_MONTHLYMORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: action.payload });
        case UPDATE_DESIREDRENT:
            return Object.assign({}, state, { desiredRent: action.payload });
 }

    return state;
}