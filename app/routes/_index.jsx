import { Link } from "@remix-run/react";
import { Button } from "~/components/Button";

export const meta = () => {
  return [
    { title: "Desserts" },
    { name: "description", content: "Get all your favourite desserts" },
  ];
};

export default function Index() {
  let desserts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1513456753721-b3f94be66822?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of a waffle on a white plate",

      title: "Waffle with berries",
      category: "Waffle",
      price: "$6.50",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1571027428931-245475d3291d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of Vanilla bean creme brulee in a tumbler",

      title: "Vanilla bean creme brulee",
      category: "Creme brulee",
      price: "$7.00",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of a red Macaron",

      title: "Macaron mix of five",
      category: "Macaron",
      price: "$8.00",
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1695755053727-8b56d7868e6a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of a delicious piece of Tiramisu",

      title: "Classic tiramisu",
      category: "Tiramisu",
      price: "$5.50",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1617806501553-d3a6a3a7b227?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of two Pistachio baklavas on a plate",

      title: "Pistachio baklava",
      category: "Baklava",
      price: "$4.00",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1728129370212-a29c8f046399?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of a lemon meringue pie on a brown plate",

      title: "Lemon meringue pie",
      category: "Pie",
      price: "$5.00",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1685957652870-d56b0e5bea52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of two pieces of red velvet cake",

      title: "Red velvet cake",
      category: "Cake",
      price: "$4.50",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1707070026861-ae45cb63d845?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of 5 pieces of salted caramel brownies on a white plate",
      title: "Salted caramel brownie",
      category: "Brownie",
      price: "$5.50",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Image of vanilla pinna cotta",
      title: "Vanilla panna cotta",
      category: "Panna cotta",
      price: "$6.50",
    },
  ];

  let cartItems = [
    {
      title: "Classic Tiramisu",
      quantity: 1,
      price: 5.5,
    },
    {
      title: "Macaron mix of five",
      quantity: 3,
      price: 8,
    },
    {
      title: "Pistachio baklava",
      quantity: 2,
      price: 4,
    },
  ];

  return (
    <main className="mt-16 px-6 xl:px-0 lg:max-w-6xl xl:max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
      <section>
        <h1 className="text-2xl lg:text-4xl font-semibold">Desserts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-8">
          {desserts.map((item, index) => (
            <Dessert key={index} dessert={item} />
          ))}
        </div>
      </section>

      {/* <section className="bg-slate-600 p-4 rounded-lg space-y-4 text-center">
        <h2>Your Cart (0)</h2>
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-cake-emoji-icon-download-in-svg-png-gif-file-formats--celebration-food-pastry-birthday-drink-twemoji-pack-icons-30680.png?f=webp&w=256"
          alt=""
          className="w-20 mx-auto"
        />
        <p className="text-gray-300">Your added items will appear here</p>
      </section> */}
      <section className="bg-slate-600 p-4 rounded-lg space-y-4 lg:min-w-72">
        <h2>Your Cart (7)</h2>
        <ul className="divide-y divide-slate-500">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

function Dessert({ dessert }) {
  return (
    <article>
      <img
        src={dessert.imageSrc}
        alt={dessert.altText}
        className="h-80 w-full object-cover rounded-lg"
      />
      <Button>Add to cart</Button>

      <p className="mt-2 text-gray-400">{dessert.category}</p>
      <Link to="/dessert">
        <h2 className="mt-2">{dessert.title}</h2>
      </Link>
      <p className="mt-2 text-orange-500 font-semibold">{dessert.price}</p>
    </article>
  );
}

function CartItem({ item }) {
  return (
    <li className="py-3">
      <h3>{item.title}</h3>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-300 flex justify-between items-center gap-4">
          {" "}
          <span className="text-orange-500">{item.quantity}x</span>{" "}
          <span>@ ${item.price}</span>{" "}
          <span className="font-semibold text-lg">
            ${item.quantity * item.price}
          </span>
        </p>
        <button className="w-6 h-6 rounded-full border border-white">X</button>
      </div>
    </li>
  );
}
