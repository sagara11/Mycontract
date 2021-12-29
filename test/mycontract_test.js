const MycontractTest = artifacts.require("MyContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyContract", accounts => {
  it("should assert true", async () => {
    const myContract = await MycontractTest.deployed();
    const a = 1;
    const b = 2;

    const result = await myContract.testFomula(a, b, { from: accounts[0] });
    assert.equal(result, 3, "There should be three")
  });
});
