// Example API route for GET, POST, PUT, DELETE
let posts = [
  { id: 1, title: 'First Post', body: 'This is the first post.' },
  { id: 2, title: 'Second Post', body: 'This is the second post.' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { title, body } = req.body;
    const newPost = { id: Date.now(), title, body };
    posts.push(newPost);
    res.status(201).json(newPost);
  } else if (req.method === 'PUT') {
    const { id, title, body } = req.body;
    posts = posts.map(post => post.id === id ? { ...post, title, body } : post);
    res.status(200).json({ id, title, body });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    posts = posts.filter(post => post.id !== id);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
