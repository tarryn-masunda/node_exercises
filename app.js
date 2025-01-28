// ==========================================
// Node.js - SHOPLEFT Database Exercise
// Module 2: Databases and Backend Development
// ==========================================

// Importing required modules
import mysql from 'mysql2/promise'; // MySQL2 for database connection and queries
import { config } from 'dotenv'; // dotenv for environment variable management

// Configure environment variables
config();

// ==========================================
// Database Connection
// ==========================================
// Create a connection pool to the MySQL database using credentials from .env
const pool = mysql.createPool({
    hostname: process.env.HOSTNAME, // Database hostname
    user: process.env.USER,         // Database username
    password: process.env.PASSWORD, // Database password
    database: process.env.DATABASE  // Database name
});

// ==========================================
// Function: Get All Users
// ==========================================
// Fetch all records from the 'users' table
const getUsers = async () => { 
    let [data] = await pool.query('SELECT * FROM users;'); // SQL query to retrieve all users
    return data; // Return the result
};

// Log the list of users to the console
console.log(await getUsers());

// ==========================================
// Function: Get All Products
// ==========================================
// Fetch all records from the 'products' table
const getProducts = async () => { 
    let [data] = await pool.query('SELECT * FROM Products;'); // SQL query to retrieve all products
    return data; // Return the result
};

// Log the list of products to the console
console.log(await getProducts());

// ==========================================
// Function: Delete a Product
// ==========================================
// Delete a product from the 'products' table by its Product_Code
const deleteProduct = async (Product_Code) => {
    const [data] = await pool.query(
        'DELETE FROM products WHERE Product_Code = ?', // SQL query to delete the product
        [Product_Code] // Product_Code parameter
    );
    return data; // Return the result
};

// Log the result of deleting the product with code 'baro1'
console.log(await deleteProduct('baro1'));

// ==========================================
// Function: Insert a New Product
// ==========================================
// Add a new product to the 'products' table
const insertProduct = async (product_code, product_name, product_price, product_quantity) => {
    let [result] = await pool.query(
        'INSERT INTO Products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)', // SQL query for insertion
        [product_code, product_name, product_price, product_quantity] // Parameters for the new product
    );
    return `Product '${product_name}' added successfully with code: ${product_code} (ID: ${result.insertId}).`; // Return success message
};

// Log the result of inserting a new product
console.log(await insertProduct('tteo1', 'Tteokbokki', 12.99, 10));

// ==========================================
// Function: Update Product Information
// ==========================================
// Update the details of a product in the 'products' table
const updateProduct = async (product_code, product_name, product_price, product_quantity) => {
    let [result] = await pool.query(
        'UPDATE Products SET product_name = ?, product_price = ?, product_quantity = ? WHERE product_code = ?', // SQL query for update
        [product_name, product_price, product_quantity, product_code] // Updated values and product_code
    );
    return result.affectedRows > 0
        ? `Product with code '${product_code}' updated successfully.` // Success message
        : `Product with code '${product_code}' not found.`; // Error message if product doesn't exist
};

// Log the result of updating the product with code 'tteo1'
console.log(await updateProduct('tteo1', 'Tteokbokki Deluxe', 14.99, 15));
