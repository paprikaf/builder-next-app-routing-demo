// components/builder.tsx
"use client";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"; 

import DefaultErrorPage from "next/error";


// Replace with your Public API Key
// builder.init('e37c3d0bc3384d548b8cff66e8a7d594');
builder.init('d839fb0e9a104e14bcfa8a0cd0fe81a2');
builder.apiVersion = "v3";

// Define a `content` property type `any`
interface BuilderPageProps { 
  content: any;
}

export function RenderBuilderContent({ content }: BuilderPageProps) { 
  // Determine if the page is being previewed in Builder
  const isPreviewing = useIsPreviewing(); 
  // render the BuilderComponent with the specified content and model props
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }
  // Else, render the 
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />; 
}
