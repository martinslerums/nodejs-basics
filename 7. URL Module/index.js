import { URL } from "url";

const exampleURL = new URL(
  "https://www.example.com:8080/p/a/t/h?query=string#hash"
);

// Structure of URL [protocol]/[hostname]:[port][pathname][search: [searchParams]][hash]

// returns #hash
console.log("Hash: ", exampleURL.hash);

// returns www.example.com:8080
console.log("Host: ", exampleURL.host);

// returns www.example.com
console.log("Hostname: ", exampleURL.hostname);

// returns /p/a/t/h
console.log("Pathname: ", exampleURL.pathname);

// returns 8080
console.log("Port: ", exampleURL.port);

// returns https://www.example.com:8080/p/a/t/h?query=string#hash
console.log("Href: ", exampleURL.href);

// returns https:
console.log("Protocol: ", exampleURL.protocol);

// returns ?query=string
console.log("Search: ", exampleURL.search);

// returns URLSearchParams { 'query' => 'string' }
console.log("Search-Params: ", exampleURL.searchParams);

//Both will return the same result:
// returns https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(exampleURL.toString());
console.log(exampleURL.toJSON());
