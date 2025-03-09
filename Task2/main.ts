// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface Person{
    Name:String;
    Age:number;
}

let persons:Person[]=[
    {Name:"Nada",Age:22},
    {Name:"Mariam",Age:17}
];

function checkPersonAge(persons):void{
 console.log(persons.Age>18?`${persons.Name} is Adult`:`${persons.Name} is Minor`);
}

persons.forEach(person => {
    checkPersonAge(person);
});
console.log("\n");


// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

interface Teacher{
    Name:String;
    Subjects:string[];
}

let teachers:Teacher[]=[
    {Name:"Nada",Subjects:["Math","Science"]},
    {Name:"Mariam",Subjects:["English", "History"]}
];
teachers.forEach(teacher => {
    console.log(`${teacher.Name} teaches:`);
    teacher.Subjects.forEach(subject => console.log(`- ${subject}`));
});
console.log("\n");

// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

// interface Product{
//     Name:string;
//     Price:number;
//     Quantity:number;
// }

// let products:Product[]=[
//     {Name: "product 1", Price: 50,  Quantity:4},
//     {Name: "product 2", Price: 20,  Quantity:10},
//     {Name: "product 3", Price: 33,  Quantity:5},
//     {Name: "product 4", Price: 65,  Quantity:9},
//     {Name: "product 5", Price: 15,  Quantity:3},
// ]

// function applyDiscount(products):number{
//     products.Quantity>5?(products.Price=products.Price-products.Price*0.15):products.Price;
//     return products.Price;
// }

// products.forEach(product => {
//     applyDiscount(product);
//     console.log(`${product.Name} - Price after discount: ${product.Price.toFixed(2)}`);
// });
// console.log("\n");

// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.
// *use interface to create a structure for this product 

interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

function displayProducts(): void {
    const container = document.getElementById("products-container");

    if (!container) return;

    container.innerHTML = ""; 

    if (products.length > 0) {
        const product = products[0]; 
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p><strong>Quantity:</strong> ${product.quantity}</p>
        `;
        container.appendChild(card);
    }
}

displayProducts();

const form = document.getElementById("product-form") as HTMLFormElement | null;

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name") as HTMLInputElement | null;
        const descriptionInput = document.getElementById("description") as HTMLTextAreaElement | null;
        const priceInput = document.getElementById("price") as HTMLInputElement | null;
        const quantityInput = document.getElementById("quantity") as HTMLInputElement | null;

        if (!nameInput || !descriptionInput || !priceInput || !quantityInput) {
            return;
        }

        const name = nameInput.value.trim();
        const description = descriptionInput.value.trim();
        const price = parseFloat(priceInput.value);
        const quantity = parseInt(quantityInput.value);

        if (products.length > 0) {
            products[0] = { name, description, price, quantity }; 
        } else {
            const newProduct: Product = { name, description, price, quantity };
            products.push(newProduct);
        }

        localStorage.setItem("products", JSON.stringify(products));

        form.reset();

        displayProducts();
    });
}

