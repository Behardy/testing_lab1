/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
if(typeOfCoin === "quarter"){
  this.cashTendered += 25;
}if(typeOfCoin === "dime"){
  this.cashTendered += 10;
}if(typeOfCoin === "nickel"){
  this.cashTendered += 5;
}else if(typeOfCoin === "pennies"){
  this.cashTendered += 1;
}
return{
insertCoin(quarter)
}
  }
  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
  if(cashTendered === amountDue){
    return true;
  }if ( cashTendered <= amountDue){
    return true;
  }else if (cashTendered >= amountDue){
    return false
  }
  
    // cold knocked me out when i got home, tried to fishin this morning at 1am//
  }

  giveChange() {
    // TODO return the correct change in the following format...
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  }
}

module.exports = { ChangeHandler };