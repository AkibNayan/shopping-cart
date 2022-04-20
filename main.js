//iPhone Part Start
document.getElementById('iphone-increase').addEventListener('click', function () {
    let iphoneQuantity = document.getElementById('iphoneQuantity').value;
    let iphoneQuantityNumber = parseFloat(iphoneQuantity);
    iphoneQuantityNumber++;
    document.getElementById('iphoneQuantity').value = iphoneQuantityNumber;
    //iphone Price Count
    totalIphonePrice(iphoneQuantityNumber);
})

document.getElementById('iphone-decrease').addEventListener('click', function () {
    let iphoneQuantity = document.getElementById('iphoneQuantity').value;
    let iphoneQuantityNumber = parseFloat(iphoneQuantity);
    if (iphoneQuantityNumber > 1) {
        iphoneQuantityNumber--;
    }
    document.getElementById('iphoneQuantity').value = iphoneQuantityNumber;
    //iphone Price Count
    totalIphonePrice(iphoneQuantityNumber);
})
//iPhone Price Count Function
function totalIphonePrice(iphoneQuantityNumber) {
    let updatedIphonePrice = 1219 * iphoneQuantityNumber;
    document.getElementById('iphonePrice').innerText = updatedIphonePrice;
    let updateCasePrice = parseFloat(document.getElementById('case-price').innerText);
    subtotal(updatedIphonePrice, updateCasePrice);
}
//iPhone Part End

//Silicon Case Part Start
document.getElementById('case-increase').addEventListener('click', function () {
    let caseQuantity = document.getElementById('case-quantity').value;
    let caseQuantityNumber = parseFloat(caseQuantity);
    caseQuantityNumber++;
    document.getElementById('case-quantity').value = caseQuantityNumber;
    //case price count
    totalCasePrice(caseQuantityNumber);
})
document.getElementById('case-decrease').addEventListener('click', function () {
    let caseQuantity = document.getElementById('case-quantity').value;
    let caseQuantityNumber = parseFloat(caseQuantity);
    if (caseQuantityNumber > 1) {
        caseQuantityNumber--;
    }
    document.getElementById('case-quantity').value = caseQuantityNumber;
    //total case price count
    totalCasePrice(caseQuantityNumber);
})
//total case price count function
function totalCasePrice(caseQuantityNumber) {
    let updateCasePrice = 59 * caseQuantityNumber;
    document.getElementById('case-price').innerText = updateCasePrice;
    let updatedIphonePrice = parseFloat(document.getElementById('iphonePrice').innerText);
    subtotal(updatedIphonePrice, updateCasePrice);
}
//Silicon Case Part End
//Subtotal Price Count Start
// let updatedIphonePrice = parseFloat(document.getElementById('iphonePrice').innerText)
// let updateCasePrice = parseFloat(document.getElementById('case-price').innerText);
// document.getElementById('subtotal').innerText = updatedIphonePrice + updateCasePrice;
// console.log(document.getElementById('subtotal').innerText);
function subtotal(updatedIphonePrice, updateCasePrice) {
    document.getElementById('subtotal').innerText = updatedIphonePrice + updateCasePrice; 
    taxCount(parseFloat(document.getElementById('subtotal').innerText));
    let subtotalAmount = parseFloat(document.getElementById('subtotal').innerText);
    let taxAmount = parseFloat(document.getElementById('tax').innerText);
    totalCount(subtotalAmount, taxAmount);
}
let updatedIphonePrice = parseFloat(document.getElementById('iphonePrice').innerText);
let updateCasePrice = parseFloat(document.getElementById('case-price').innerText);
document.getElementById('subtotal').innerText = updatedIphonePrice + updateCasePrice;
//Subtotal Price Count End
//Tax Count Start
let subtotalPrice = parseFloat(document.getElementById('subtotal').innerText);
//2% tax should give for subtotal;
function taxCount(subtotalPrice) {
    let tax = ((subtotalPrice * 2) / 100)
    let totalTax = Math.ceil(tax);
    document.getElementById('tax').innerText = totalTax;
}
let tax = ((subtotalPrice * 2) / 100)
let totalTax = Math.ceil(tax);
document.getElementById('tax').innerText = totalTax;
//Tax Count End
//Total Price Count Start
function totalCount(subtotalAmount, taxAmount) {
    let totalAmount = subtotalAmount - taxAmount;
    document.getElementById('total').innerText = totalAmount;
}
let subtotalAmount = parseFloat(document.getElementById('subtotal').innerText);
let taxAmount = parseFloat(document.getElementById('tax').innerText);
let totalAmount = subtotalAmount - taxAmount;
document.getElementById('total').innerText = totalAmount;
//Total Price Count End
