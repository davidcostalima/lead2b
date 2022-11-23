function mascNumber() {
    var imputNUMBER = ref = '.number'.value
    imputNUMBER = imputNUMBER.replace(/\D/g, "")
    document.querySelector('.number').value = imputNUMBER
}