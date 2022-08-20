var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}
upperCaseCustomerName();
console.log(upperCaseCustomerName());
var customerName = upperCaseCustomerName();
console.log(customerName);

function setBestCustomer(name){
    var bestCustomer = name;
    return bestCustomer;
}
var bestCustomer = setBestCustomer();
console.log(bestCustomer);
var bestCustomer = setBestCustomer('not bob');
console.log(bestCustomer);

function overwriteBestCustomer(name){
    var bestCustomer = name;
    return bestCustomer;
}
var bestCustomer = overwriteBestCustomer('maybe bob');
console.log(bestCustomer);

const leastFavoriteCustomer = 'job';

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer = name;
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer('tom');
console.log(changeLeastFavoriteCustomer('tom'));
