require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/order', async (req, res) => {
    return res.status(200).json({ 'msg': 'Order service on' });
});




const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
