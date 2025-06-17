const axios = require('axios');

async function testPost() {
  try {
    const response = await axios.post('http://localhost:3000/api/pizzas', {
      _id: 9,
      name: "Test Pizza",
      size: ["12\"", "16\""],
      price: ["$12", "$18"],
      toppings: ["Cheese", "Tomato"],
      img_name: "test.jpg"
    });
    console.log('Response data:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testPost();