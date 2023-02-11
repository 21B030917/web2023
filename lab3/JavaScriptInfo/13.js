function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}