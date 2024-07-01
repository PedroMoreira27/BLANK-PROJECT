import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

export interface Anime {
  title: string;
  url: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  synopsis: string;
  type: string;
  episodes: number;
  status: string;
  rating: string;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  favorites: number;
}

export interface LoaderData {
  anime: Anime;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { nomes } = params;
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${nomes}`);

    if (!res.ok) {
      throw new Response("Failed to fetch data from API", { status: res.status });
    }

    const data = await res.json();

    return json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Internal Server Error", { status: 500 });
  }
};

export default function AnimePage() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Anime Data for {data.title}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function () {
  return (
    <div>
      <h1>Anime Page</h1>
    </div>
  ) 
}
