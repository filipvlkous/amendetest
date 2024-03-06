
export async function getData() {
  const url="https://crudcrud.com/api/7c01e6b4f7f04ae39bb0304b6adb621a/books/"
    // const url = "https://superhero-search.p.rapidapi.com/api/villains";
    const options = {
      method: "GET",
      // headers: {
      //   "X-RapidAPI-Key": "1c74f3df14msh726f94f4eb55b1fp1cdfabjsnd512d27323ed",
      //   "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      // },
    };
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }