require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot charge rifle noble essay coral light army giant'; 
let testAccounts = [
"0x8f2d7ba53ace7f9f7c48dda9cee0e3043632d869d0d4d7c78f7906371c7f3dec",
"0x14d86ca4f6a11f6101e226472f640f5e800ae726810bce651df225edebb24da3",
"0x51abf50b1c90fe2130e83399525bf4065ad46a5a121dbb4afcd62cbcb01a018a",
"0x86c3e7265b6b3b8580bfc6ef6471862b3812b15bc003d0c7446b0ace96226634",
"0x93f149faf5ce0662beb49343025b6ccbc72d299b106c3af935bbdb7ecc5716bf",
"0xa1443b2d9047ef45c40f6eff74120ad3cc2b933a659f7fe1c207b474df3a7936",
"0xb8555c185f346c75e6cc2f5a25299ada40d17bd7e5cba0b03e0c244ac212e58e",
"0xff26d9ee995471cddca3958e6089c9fcfd0bea500e7dd63c3954af8582181c1e",
"0x2dba6827f57a72366647b3004a44bfcf06eadbb761d9aa5cb3b7fddff755271d",
"0xb7767d5df92dc7720abf705d5efa215cb6748cff1543ce10d42c25003bbe61b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};
