import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { client } from "~/mongoClient.server";

export const meta = () => {
  return [
    { title: "Desserts" },
    { name: "description", content: "Get all your favourite desserts" },
  ];
};

export async function loader() {
  // Handles GET requests
  // Used for reading data

  let db = client.db("desserts");
  let collection = db.collection("desserts");

  let desserts = await collection.find().toArray();

  // Construct a new array with string ids
  let newDesserts = Array.from(desserts).map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return newDesserts;
}

// export async function action() {

// Handles POST, PUT, PATCH, DELETE
// Used for writing or mutating data

// }

// app.get('/', (req,res) => {

//   res.render('home')
// })

// app.post('/', (req,res) => {
//   let body = req.body;
//   let title = body.title
// })

// app.get('/desserts/:id', (req,res) => {

// })

export default function Index() {
  let desserts = useLoaderData();
  console.log({ desserts });

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
          {desserts.map((item) => (
            <Dessert key={item._id} dessert={item} />
          ))}
        </div>
      </section>
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
  let id = dessert._id;
  // console.log({ dessert });
  return (
    <article>
      <img
        src={dessert.imageSrc}
        alt={dessert.altText}
        className="h-80 w-full object-cover rounded-lg"
      />
      <Button>Add to cart</Button>

      <p className="mt-2 text-gray-400">{dessert.category}</p>
      <Link
        to={`/dessert/${id}`}
        prefetch="intent"
        className="hover:text-orange-300 hover:underline transition duration-300 ease-in-out"
      >
        <h2 className="mt-2 ">{dessert.title}</h2>
      </Link>
      <p className="mt-2 text-orange-500 font-semibold">${dessert.price}</p>
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
