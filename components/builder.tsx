// components/builder.tsx
"use client";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
import DefaultErrorPage from "next/error";

// Replace with your Public API Key
builder.init('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

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
