// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
var persons = [
    { Name: "Nada", Age: 22 },
    { Name: "Mariam", Age: 17 }
];
function checkPersonAge(persons) {
    console.log(persons.Age > 18 ? "".concat(persons.Name, " is Adult") : "".concat(persons.Name, " is Minor"));
}
persons.forEach(function (person) {
    checkPersonAge(person);
});
console.log("\n");
var teachers = [
    { Name: "Nada", Subjects: ["Math", "Science"] },
    { Name: "Mariam", Subjects: ["English", "History"] }
];
teachers.forEach(function (teacher) {
    console.log("".concat(teacher.Name, " teaches:"));
    teacher.Subjects.forEach(function (subject) { return console.log("- ".concat(subject)); });
});
console.log("\n");
var products = JSON.parse(localStorage.getItem("products") || "[]");
function displayProducts() {
    var container = document.getElementById("products-container");
    if (!container)
        return;
    container.innerHTML = ""; // تنظيف الحاوية قبل عرض المنتجات الجديدة
    // عرض المنتج الوحيد في المصفوفة
    if (products.length > 0) {
        var product = products[0]; // نعرض المنتج الأول فقط
        var card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = "\n            <h3>".concat(product.name, "</h3>\n            <p><strong>Description:</strong> ").concat(product.description, "</p>\n            <p><strong>Price:</strong> $").concat(product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), "</p>\n            <p><strong>Quantity:</strong> ").concat(product.quantity, "</p>\n        ");
        container.appendChild(card);
    }
}
displayProducts();
var form = document.getElementById("product-form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var nameInput = document.getElementById("name");
        var descriptionInput = document.getElementById("description");
        var priceInput = document.getElementById("price");
        var quantityInput = document.getElementById("quantity");
        if (!nameInput || !descriptionInput || !priceInput || !quantityInput) {
            return;
        }
        var name = nameInput.value.trim();
        var description = descriptionInput.value.trim();
        var price = parseFloat(priceInput.value);
        var quantity = parseInt(quantityInput.value);
        // تحديث بيانات المنتج الموجود إذا كان موجود
        if (products.length > 0) {
            products[0] = { name: name, description: description, price: price, quantity: quantity }; // تعديل المنتج الأول
        }
        else {
            // إضافة منتج جديد إذا لم يوجد أي منتج
            var newProduct = { name: name, description: description, price: price, quantity: quantity };
            products.push(newProduct);
        }
        // حفظ المنتج المعدل أو الجديد في localStorage
        localStorage.setItem("products", JSON.stringify(products));
        form.reset();
        // عرض المنتج المعدل
        displayProducts();
    });
}
