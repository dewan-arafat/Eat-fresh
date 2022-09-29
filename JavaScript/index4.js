//Problem no 4. Public Bus Fare Calculation//

function publicBusFare(totalPeople) {
    const dataType = typeof totalPeople;
    //Validation Checking//
    if (dataType == 'number') {
        if (totalPeople < 50) {
            //Fare Calculation//
            return 250 * (totalPeople % 11);
        }
        else {
            if (totalPeople % 50 <= 10) {
                return 250 * (totalPeople % 50);
            }
            else if (totalPeople % 50 <= 49) {
                return 250 * ((totalPeople % 50) % 11);
            }
        }
    }
    else {
        return 'Please Enter a valid number';
    }
}
