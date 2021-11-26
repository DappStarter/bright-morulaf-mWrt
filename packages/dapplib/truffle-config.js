require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift repeat saddle exchange hockey arctic metal genuine'; 
let testAccounts = [
"0xa9b1acd8ff81258a051584b99d88539732770c8ecb8aab8761861d20c02042bf",
"0x1f59e956834667a66288faaa8cc7c6a69e0e8855b25e109304a188f7ab5b1800",
"0x1332ebcf8cc2329785e2f3fb956648835f938968844219f215ee5dda9af852e2",
"0x3547881cad37588f63cb639e1ac90955f0cc6dee24146a1c7d50122d4f361c98",
"0x43810d3a8691d541d6f85e949a026bd0cfb0841417884a2f628756819e414972",
"0xa0ffbd354cd4a5aeee906b36c465db32925de69d7d93e0565cae3fd191855ff1",
"0x0ce9f7f16cf02092b48f87a095dbae3a645e5225ae92d4fd0ff32ed58c09ee74",
"0xb0d825d97b2dee90baa7bcd2c9a1de0e9f443b1bd1fe385d4fe7d0170bf7adb7",
"0x5bb18afe1d6e83e0348847a470bf65b113e243a63bf8ce737e09e5d03569d9bf",
"0xf2cfe5b50e4cc7859fc972eee056460276c58f92cfc10a3744462ec1598ff51a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

