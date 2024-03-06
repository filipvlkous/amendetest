export async function GET() {
    const url = "https://superhero-search.p.rapidapi.com/api/villains";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1c74f3df14msh726f94f4eb55b1fp1cdfabjsnd512d27323ed",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const data = await res.json()
   
    return Response.json({ data })
  }