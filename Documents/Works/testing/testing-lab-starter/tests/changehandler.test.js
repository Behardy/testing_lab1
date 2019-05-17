let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function () {

    // Set up a test below...
    test("The ChangeHandler class is defined.", function () {
        // Remember, you can arrange, act, and assert...start small
        expect(ChangeHandler).toBeDefined();
    });
    test("AMoutn Due", function () {
        const vendingMachine = new ChangeHandler(10);
        expect(vendingMachine.amountDue).toBe(10)
    });
    test("cash tender is 0", function () {
        const vendingMachine = new ChangeHandler(10);
        expect(vendingMachine.cashTendered).toBe(0)

    });
    test("inserting a quarter increase cashTendered by 25.", function () {
        const vendingMachine = new ChangeHandler(10);
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.cashTendered).toBe(25)

    });
    test("inserting a dime, will inrease cashTenderd by 10.", function () {
        const vendingMachine = new ChangeHandler;
        vendingMachine.insertCoin("dime");
        expect(vendingMachine.cashTendered).toBe(10)
    });

    test("inserting a nickel increase the cashTendered by 5.", function () {
        const vendingMachine = new ChangeHandler;
        vendingMachine.insertCoin("nickel");
        expect(vendingMachine.cashTendered).toBe(5)
    });
    test("inserting a pennies increase the cashTendered by 1.", function () {
        const vendingMachine = new ChangeHandler;
        vendingMachine.insertCoin("pennies");
        expect(vendingMachine.cashTendered).toBe(1)
    });
test("cashTendered is equal to the Amount due", function(){
const vendingMachine = new ChangeHandler;
expect(vendingMachine.cashTendered).toBeGreaterThanOrEqual(amountDue)
});
test("cashTendered is less than amountDue", function(){
    const vendingMachine = new ChangeHandler;
    expect(vendingMachine.cashTendered).toBeLessThan(amountDue)
});
test("cashTendered is greater than the amountDue ",function(){
    const vendingMachine = new ChangeHandler;
    expect(vendingMachine.cashTendered).toBeGreaterThan(amountDue)
});
test("change given is 32, 1 quater, 1 nickel,2 pennies,0 dimes. ")
const vendingMachine = new ChangeHandler;
expect(vendingMachine.giveChange).toBe
});