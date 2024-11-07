import { useLoaderData } from "@remix-run/react";
import { ObjectId } from "mongodb";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { Label } from "~/components/Label";
import { Textarea } from "~/components/Textarea";
// import desserts from "~/desserts.json";
import { client } from "~/mongoClient";

export async function loader({ params }) {
  let id = params.id;
  let db = client.db("desserts");
  let collection = db.collection("desserts");

  let dessert = await collection.findOne({ _id: new ObjectId(id) });

  return dessert;
}

export default function Dessert() {
  let dessert = useLoaderData();
  return (
    <main className="lg:max-w-5xl mx-auto">
      <h1>{dessert.title}</h1>
      <img
        src={dessert.imageSrc}
        alt={dessert.altText}
        className="h-96 w-full object-cover rounded-lg mt-8"
      />
      {/* Content */}
      <div className="mt-8">{dessert.content}</div>
      <h2 className="mt-8">Reviews</h2>

      <div className="mt-4 flex flex-col gap-4 max-w-xl">
        <Review name="Brian Mwangi" content="This is a fantastic meal!" />
        <Review name="Jane Doe" content="Best meal ever!" />
      </div>

      <form method="post" className="max-w-xl mt-8">
        <fieldset>
          <legend>Add review</legend>
          <div className="flex flex-col gap-1 mt-4">
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" />
          </div>
          {/* <label >Username</label> */}
          {/* <input type="text" name="username" id="username" /> */}

          <div className="flex flex-col gap-1 mt-2">
            <Label htmlFor="review">Review</Label>
            <Textarea name="review" id="review" />
          </div>

          <Button>Submit review</Button>
        </fieldset>
      </form>
    </main>
  );
}

function Review({ name, content }) {
  let firstName = name.split(" ")[0];
  let initial = firstName.charAt(0);

  return (
    <div className="bg-[#1c202a] p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <span className="bg-orange-500 w-10 h-10 rounded-full grid place-items-center">
          {initial}
        </span>
        <p>{name}</p>
      </div>
      <p className="mt-2 text-gray-300">{content}</p>
    </div>
  );
}

// About page

// Brief about info
// Image of the venue
// Location
// Team
