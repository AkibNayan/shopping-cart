//Quantity Count Function
function quantity(id) {
    let quantity = document.getElementById(id).value;
    let quantityNumber = parseInt(quantity);
    return quantityNumber;
}
//iPhone Price Count Function
function totalIphonePrice(iphoneQuantityNumber) {
    let updatedIphonePrice = 1219 * iphoneQuantityNumber;
    document.getElementById('iphonePrice').innerText = updatedIphonePrice;
    let updateCasePrice = parseInt(document.getElementById('case-price').innerText);
    subtotal(updatedIphonePrice, updateCasePrice);
}

//iPhone Part Start
document.getElementById('iphone-increase').addEventListener('click', function () {
    let iphoneQuantityNumber = quantity('iphoneQuantity');
    iphoneQuantityNumber++;
    document.getElementById('iphoneQuantity').value = iphoneQuantityNumber;
    //iphone Price Count
    totalIphonePrice(iphoneQuantityNumber);
})

document.getElementById('iphone-decrease').addEventListener('click', function () {
    let iphoneQuantityNumber = quantity('iphoneQuantity');;
    if (iphoneQuantityNumber > 1) {
        iphoneQuantityNumber--;
    }
    document.getElementById('iphoneQuantity').value = iphoneQuantityNumber;
    //iphone Price Count
    totalIphonePrice(iphoneQuantityNumber);
})
//iPhone Part End

//total case price count function
function totalCasePrice(caseQuantityNumber) {
    let updateCasePrice = 59 * caseQuantityNumber;
    document.getElementById('case-price').innerText = updateCasePrice;
    let updatedIphonePrice = parseInt(document.getElementById('iphonePrice').innerText);
    subtotal(updatedIphonePrice, updateCasePrice);
}
//Silicon Case Part Start
document.getElementById('case-increase').addEventListener('click', function () {
    let caseQuantityNumber = quantity('case-quantity');
    caseQuantityNumber++;
    document.getElementById('case-quantity').value = caseQuantityNumber;
    //case price count
    totalCasePrice(caseQuantityNumber);
})
document.getElementById('case-decrease').addEventListener('click', function () {
    let caseQuantityNumber = quantity('case-quantity');
    if (caseQuantityNumber > 1) {
        caseQuantityNumber--;
    }
    document.getElementById('case-quantity').value = caseQuantityNumber;
    //total case price count
    totalCasePrice(caseQuantityNumber);
})
//Silicon Case Part End

//Subtotal Price Count Start
function subtotal(updatedIphonePrice, updateCasePrice) {
    document.getElementById('subtotal').innerText = updatedIphonePrice + updateCasePrice; 
    taxCount(parseInt(document.getElementById('subtotal').innerText));
    let subtotalAmount = parseInt(document.getElementById('subtotal').innerText);
    let taxAmount = parseInt(document.getElementById('tax').innerText);
    totalCount(subtotalAmount, taxAmount);
}
let updatedIphonePrice = parseInt(document.getElementById('iphonePrice').innerText);
let updateCasePrice = parseInt(document.getElementById('case-price').innerText);
document.getElementById('subtotal').innerText = updatedIphonePrice + updateCasePrice;
//Subtotal Price Count End

//Tax Count Start
let subtotalPrice = parseInt(document.getElementById('subtotal').innerText);
function taxCount(subtotalPrice) {
    //2% tax should give for subtotal;
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
    let totalAmount = subtotalAmount + taxAmount;
    document.getElementById('total').innerText = totalAmount;
}
let subtotalAmount = parseInt(document.getElementById('subtotal').innerText);
let taxAmount = parseInt(document.getElementById('tax').innerText);
let totalAmount = subtotalAmount + taxAmount;
document.getElementById('total').innerText = totalAmount;
//Total Price Count End
