import Query from "@/app/components/[id]/query";

async function getData() {
  try {
    const url = `https://superhero-search.p.rapidapi.com/api/villains`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1c74f3df14msh726f94f4eb55b1fp1cdfabjsnd512d27323ed",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);

    return res.json();
  } catch (error: any) {
    throw new Error("Failed to fetch data" + error.message);
  }
}
export default async function Page() {
  const data = await getData();

  return <Query data={data} />;
}