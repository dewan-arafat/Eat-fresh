//Problem no 5. Best Friend Checking
function isBestFriend(firstPerson, secondPerson) {
    //validation Checking//
    if (typeof firstPerson.name == 'string' && typeof secondPerson.name == 'string' && typeof firstPerson.friend == 'string' && typeof secondPerson.friend == 'string')
    //Best Friend checking logic//
    {
        if (firstPerson.name.toLowerCase() == secondPerson.friend.toLowerCase() && firstPerson.friend.toLowerCase() == secondPerson.name.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Please Input Valid Name'
    }
}







