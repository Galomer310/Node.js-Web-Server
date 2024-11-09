const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const books = [
    { id: 1, title: 'Death by Black Hole', author: 'Neil deGrasse Tyson', publishedYear: 2007 },
    { id: 2, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', publishedYear: 2011 },
    { id: 3, title: 'Guns, Germs, and Steel', author: 'Jared Diamond', publishedYear: 1997 },
    { id: 4, title: 'The Selfish Gene', author: 'Richard Dawkins', publishedYear: 1976 },
    { id: 5, title: 'A Brief History of Time', author: 'Stephen Hawking', publishedYear: 1988 },
    { id: 6, title: 'Gravitation', author: 'Charles W. Misner, Kip S. Thorne, John Archibald Wheeler', publishedYear: 1973 }
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    } 
    res.json(book);
});

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = {
        id: books.length + 1, 
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
