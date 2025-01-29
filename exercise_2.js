// Importing the required dependencies
import express from 'express' 

// Initialize the express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define PORT
const PORT = 4000;

// Routes for 'employees'
app.get('/employees', (req, res) => {
  res.json({ message: "This is the GET employees path" });
});

app.post('/employees', (req, res) => {
  res.json({ message: "This is the POST employees path and a new employee was added" });
});

app.put('/employees/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PUT employees path and employee ${id} was updated` });
});

app.patch('/employees/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PATCH employees path and employee ${id} was partially updated` });
});

app.delete('/employees/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the DELETE employees path and employee ${id} was deleted` });
});

// Routes for 'managers'
app.get('/managers', (req, res) => {
  res.json({ message: "This is the GET managers path" });
});

app.post('/managers', (req, res) => {
  res.json({ message: "This is the POST managers path and a new manager was added" });
});

app.put('/managers/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PUT managers path and manager ${id} was updated` });
});

app.patch('/managers/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PATCH managers path and manager ${id} was partially updated` });
});

app.delete('/managers/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the DELETE managers path and manager ${id} was deleted` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
