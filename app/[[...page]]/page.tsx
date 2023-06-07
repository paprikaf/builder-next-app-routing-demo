'use client';
// For pages and sections, goes in src/app/[[...page]/page.tsx]
// import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";
import {builder} from '@builder.io/react';

// Replace with your Public API Key
// builder.init('e37c3d0bc3384d548b8cff66e8a7d594');
builder.init('d839fb0e9a104e14bcfa8a0cd0fe81a2');
builder.apiVersion = "v3";

// 'mach'
// Define the expected shape of the props
// object passed to the Page function
interface PageProps {
  params: {
    page: string[];
  };
}

// Async function called Page takes a single
// argument called props of type PageProps
export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to prevent infinite rendering loops
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();
    // console.log('content.data', content?.data)
    const dataModel = await builder.getAll('mach', {
      options: {
        vercelPreview: process.env.VERCEL_ENV === 'preview',
      },
    })
    console.log('dataModel', dataModel)
  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content}  />
    </>
  );
}

// "use client";
// import Home from "../links/page";

// export default function HomePage() {
//   return <Home />;
// }