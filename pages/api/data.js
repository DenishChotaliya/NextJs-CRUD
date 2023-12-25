// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
let data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];
export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const newItem = JSON.parse(req.body);
    newItem.id = data.length + 1;
    data.push(newItem);
    res.status(201).json(newItem);
  } else if (req.method === 'PUT') {
    const updatedItem = JSON.parse(req.body);
    data = data.map((item) => (item.id === updatedItem.id ? updatedItem : item));
    res.status(200).json(updatedItem);
  } else if (req.method === 'DELETE') {
    const itemId = JSON.parse(req.body).id;
    data = data.filter((item) => item.id !== itemId);
    res.status(200).json({ id: itemId });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
