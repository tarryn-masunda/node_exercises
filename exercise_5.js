import mysql from 'mysql2/promise'
import express from 'express' 
import {config }from 'dotenv'
import { get } from 'http'
config()
 
const pool = mysql.createPool({
    hostname:process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

const app = express()

app.use(express.json())

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})

app.get('/products', async(req,res)=>{
    res.json({products: await getProducts()})
})

const getProducts = async ()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}
console.log(await getProducts())

app.get('/products/:id', async(req,res)=>{
    res.json({products: await getSingleProducts(req.params.id)})
})

const getSingleProducts = async (id)=>{
    let [data] = await pool.query('SELECT * FROM products WHERE product_code = ?',[id])
    return data
}

// console.log(await getSingleProducts('tteo1'));

app.post('/products' ,async(req,res)=>{
    let {product_code, product_name ,product_price,product_quantity } = req.body
    console.log(req.body); 
    res.json({
     products: await insertProducts(product_code,product_name ,product_price,product_quantity )
    })
}) 
   
const insertProducts = async (product_code, product_name ,product_price,product_quantity )=> {
    console.log(product_code, product_name ,product_price,product_quantity );
    
    await pool.query('INSERT INTO `shopleft`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) VALUES (?, ?, ?, ?)',[product_code, product_name ,product_price,product_quantity ])
    return await getProducts();
}  

app.delete('/products/:id', async (req, res) => {
    let { id } = req.params;
    res.json({
        products: await deleteProduct(id)
    });
});

const deleteProduct = async(id) => {
    await pool.query( 'DELETE FROM `shopleft`.`products` WHERE (`product_code` = ?)',[id]
    );
    return await getProducts(hand1)
}

app.patch('/products/:id', async (req, res,id) => {
    let { product_code, product_name ,product_price,product_quantity } = req.body;
    // let { id } = req.params;
    res.json({
        product: await updateProducts(product_code, product_name ,product_price,product_quantity)
    }); 
});

const updateProducts = async (product_name ,product_price,product_quantity, product_code ) => {
    await pool.query(
        'UPDATE products SET product_name = ?, product_price = ? , product_quantity = ? WHERE product_code = ?',
        [product_name, product_price, product_quantity, product_code]
    );
    return
};
 
updateProducts('Tteokbokki','20.99', 96,'tteo1');

// ****************************************************************************

app.get('/users', async (req, res) => {
    console.log(await getUsers());
    
    res.json({ users: await getUsers() });
});

const getUsers = async () => {
    let [data] = await pool.query('SELECT * FROM users');
    return data;
};

app.get('/users/:id', async (req, res) => {
    res.json({ users: await getSingleUsers(req.params.id) });
});

const getSingleUsers = async (id) => {
    let [data] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return data;
}; 
console.log(await getSingleUsers(4));

// Insert a new user
app.post('/users', async (req, res) => {
    let { id, email, first_name, last_name, password } = req.body;
    console.log(req.body);
    res.json({
        users: await insertUsers(id, email, first_name, last_name, password)
    });
}); 

const insertUsers = async (id, email, first_name, last_name, password) => {
    console.log(id, email, first_name, last_name, password);

    await pool.query(
        'INSERT INTO `shopleft`.`users` (`id`, `email`, `first_name`, `last_name`, `password`) VALUES (?, ?, ?, ?, ?)',
        [id, email, first_name, last_name, password]
    );
    return await getUsers();
};

// Delete a user
app.delete('/users/:id', async (req, res) => {
    let { id } = req.params;
    res.json({
        users: await deleteUsers(id)
    });
});

const deleteUsers = async (id) => {
    await pool.query('DELETE FROM `shopleft`.`users` WHERE `id` = ?', [id]);
    return await getUsers(); 
};

// Update a user
app.patch('/users/:id', async (req, res) => {
    let { id } = req.params;
    let { email, first_name, last_name, password } = req.body;

    res.json({
        user: await updateUsers(id, email, first_name, last_name, password)
    }); 
});

const updateUsers = async (last_name, password) => {
    await pool.query(
        'UPDATE `shopleft`.`users` SET last_name = ?, password = ? WHERE id = ?',
        [last_name, password, id]
    );
    return await getUsers('Daniels', 'tarryndaniels',3);
};
