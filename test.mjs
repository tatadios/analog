import init, { new_cert } from "@analog-labs/timegraph-wasm";
// wallet address must be polkadot/substrate supported.
// Role can be user or developer
const [cert, secret] = new_cert("an8G6PdNgt8FjnPrXiyf8V7XMGzDydhdQfZAvgpLk8zNEXvjL", "developer"); 
