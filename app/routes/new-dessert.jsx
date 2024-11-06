import { json, useActionData } from "@remix-run/react";
import { Button } from "~/components/Button";
import { FormSpacer } from "~/components/FormSpacer";
import { Input } from "~/components/Input";
import { Label } from "~/components/Label";
import { Textarea } from "~/components/Textarea";
import { validate } from "~/utils/validation";

export async function action({ request }) {
  // Handles POST requests to this route

  let formData = await request.formData();

  let title = formData.get("title");
  let category = formData.get("category");
  let price = formData.get("price");
  let imageSrc = formData.get("imageSrc");
  let altText = formData.get("altText");
  let content = formData.get("content");

  console.log({ title });
  console.log({ category });
  console.log({ price });
  console.log({ imageSrc });
  console.log({ altText });
  console.log({ content });

  let fieldErrors = {
    title: validate(title),
    category: validate(category),
    price: validate(price),
    imageSrc: validate(imageSrc),
    altText: validate(altText),
    content: validate(content),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return json(
      { fieldErrors },
      {
        status: 400,
      }
    );
  }

  // Add dessert to db

  return null;
}

export default function NewDessert() {
  let actionData = useActionData();
  console.log({ actionData });
  return (
    <main className="lg:max-w-3xl mx-auto mt-16">
      <h1>Create a new dessert</h1>
      <form method="post" className="mt-8">
        <FormSpacer>
          <Label htmlFor="title">Title</Label>
          <Input type="text" name="title" id="title" />
          {actionData?.fieldErrors?.title ? (
            <p className="text-red-500 text-sm">
              {actionData.fieldErrors.title}
            </p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="category">Category</Label>
          <Input type="text" name="category" id="category" />
          {actionData?.fieldErrors?.category ? (
            <p className="text-red-500 text-sm">
              {actionData.fieldErrors.category}
            </p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="price">Price</Label>
          <Input type="text" name="price" id="price" />
          {actionData?.fieldErrors?.price ? (
            <p className="text-red-500 text-sm">
              {actionData.fieldErrors.price}
            </p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="imageSrc">Image url</Label>
          <Input type="text" name="imageSrc" id="imageSrc" />
          {actionData?.fieldErrors?.imageSrc ? (
            <p className="text-red-500 text-sm">
              {actionData.fieldErrors.imageSrc}
            </p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="altText">Alt text</Label>
          <Input type="text" name="altText" id="altText" />
          {actionData?.fieldErrors?.altText ? (
            <p className="text-red-500 text-sm">
              {actionData.fieldErrors.altText}
            </p>
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="content">Content</Label>
          <Textarea name="content" id="content" />
          {actionData?.fieldErrors?.content ? (
            <p className="text-red-500 text-sm">
              {actionData.fieldErrors.content}
            </p>
          ) : null}
        </FormSpacer>

        <Button>Add dessert</Button>
      </form>
    </main>
  );
}
