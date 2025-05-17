
var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 4.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];




let title = products.map(products=> products.title);
console.log(title);


let blackColorProducts = products.filter((b)=>
        b.variations.filter((variation) => variation.color === "silver").length)
      
      console.log(blackColorProducts);





let totalStock = products.reduce((total, product) => {
  let productStock = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
  return total + productStock;
}, 0);





console.log("Total Stock:", totalStock);

      let highreviews  = products.filter((rev)=> rev.reviews.filter((reviews)=> reviews.rating === 5.0,).length );

      console.log(highreviews);







      



let productsDetails = products.map(product => ({
  title: product.title,
  variations: product.variations.map(variation => ({
    color: variation.color,
    price: variation.price,
    quantity: variation.quantity
  }))
}));

console.log(productsDetails);






let totalRevenue = products.reduce((total, product) => {
  let productRevenue = product.variations.reduce((sum, variation) => {
    return sum + (variation.price * variation.quantity);
  }, 0);
  return total + productRevenue;
}, 0);

console.log("Total Revenue:", totalRevenue);






      

let totalproducts = products.reduce((total, product) => {
  let productStock = product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
  return total + productStock;
}, 0);

console.log("Total Stock:", totalproducts);




