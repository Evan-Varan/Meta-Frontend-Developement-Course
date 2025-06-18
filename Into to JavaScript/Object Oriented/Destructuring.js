//Array of arrays example
const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];

const item = products[1]
const [secondProductName, secondProductPrice] = item;

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);

//Object example 
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

const { author, title, timePosted } = review
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
