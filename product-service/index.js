require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/product', async (req, res) => {
    return res.status(200).json({ 'msg': 'Product service on' });
});




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
