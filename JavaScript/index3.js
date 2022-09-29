// Problem no 3. Oil price Calculation//

function oilPrice(desel, petrol, octen) {
    const dataTypeDesel = typeof desel;
    const dataTypePetrol = typeof petrol;
    const dataTypeOcten = typeof octen;
    if (dataTypeDesel == 'number' && dataTypeOcten == 'number' && dataTypePetrol == 'number') {
        //summation of Total Price//
        return 114 * desel + 130 * petrol + 135 * octen;
    }
    else {
        return 'Please enter a valid number';
    }
}
