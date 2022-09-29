//Problem no 2. Checking Js File or not//
function isJavaScriptFile(fileName) {
    const dataType = typeof fileName;
    if (dataType == 'string') {
        return fileName.endsWith('.js');
    }
    else {
        return 'Please Enter a valid file name';
    }
}
