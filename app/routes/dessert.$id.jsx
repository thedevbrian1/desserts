import {
  Form,
  json,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { ObjectId } from "mongodb";
import { Button } from "~/components/Button";
import { ThreeDots } from "~/components/Icon";
import { Input } from "~/components/Input";
import { Label } from "~/components/Label";
import { Textarea } from "~/components/Textarea";
import { ValidationError } from "~/components/ValidationError";
// import desserts from "~/desserts.json";
import { client } from "~/mongoClient.server";
import { validate } from "~/utils/validation";

export async function loader({ params }) {
  let id = params.id;
  let db = client.db("desserts");
  let collection = db.collection("desserts");

  let dessert = await collection.findOne({ _id: new ObjectId(id) });

  return dessert;
}

export async function action({ request, params }) {
  let id = params.id;

  let formData = await request.formData();

  // Get values submitted from the form
  let username = formData.get("username");
  let review = formData.get("review");

  // Validate and return errors if any
  let fieldErrors = {
    username: validate(username),
    review: validate(review),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return json({ fieldErrors }, { status: 400 });
  }

  // Add a review to the dessert
  let db = client.db("desserts");
  let collection = db.collection("desserts");

  let result = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $push: {
        reviews: {
          username,
          review,
        },
      },
    }
  );

  console.log({ result });

  return null;
}

export default function Dessert() {
  let dessert = useLoaderData();

  let actionData = useActionData();

  let navigation = useNavigation();
  console.log({ navigation });

  let isSubmitting = navigation.state === "submitting";

  console.log({ isSubmitting });

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
        {dessert.reviews ? (
          dessert.reviews.map((item, index) => (
            <Review key={index} name={item.username} content={item.review} />
          ))
        ) : (
          <p className="text-gray-300">No reviews yet</p>
        )}
      </div>

      <Form method="post" className="max-w-xl mt-8">
        <fieldset>
          <legend>Add review</legend>

          <div className="flex flex-col gap-1 mt-4">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              hasError={actionData?.fieldErrors?.username}
            />
            {actionData?.fieldErrors.username ? (
              <ValidationError>
                {actionData.fieldErrors.username}
              </ValidationError>
            ) : (
              <>&nbsp;</>
            )}
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <Label htmlFor="review">Review</Label>
            <Textarea name="review" id="review" />
            {actionData?.fieldErrors.review ? (
              <ValidationError>{actionData.fieldErrors.review}</ValidationError>
            ) : (
              <>&nbsp;</>
            )}
          </div>
          <Button>
            {isSubmitting ? (
              <span className="w-10">
                <ThreeDots />
              </span>
            ) : (
              "Submit review"
            )}
          </Button>
        </fieldset>
      </Form>
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
