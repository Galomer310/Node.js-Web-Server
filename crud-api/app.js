const express = require('express');
const app = express();
const { fetchPosts } = require('./data/dataService');

const PORT = 5000;

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data successfully retrieved');
    res.json(posts);
  } catch (error) {
    res.status(500).send('Error retrieving posts');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
