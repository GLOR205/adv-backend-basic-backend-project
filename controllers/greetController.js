const greetController = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const name = url.searchParams.get('name') || 'World';
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!`);
};

module.exports = greetController;
