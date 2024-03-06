import MainBody from "@/app/components/book/main";
import Image from "next/image";

const apiCall = async (id: string) => {
  const username = process.env.BASIC_AUTH_NAME;
  const password = process.env.BASIC_AUTH_PASS;
  const basicAuthCredentials = btoa(`${username}:${password}`);
  const resp = await fetch(`http://localhost:3000/api/admin/books/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${basicAuthCredentials}`,
    },
  });

  return await resp.json();
};
export default async function Page({ params }: any) {
  //  const id = searchParams.get("id");
  // const id = "65e799e71d380403e87149ee";

  // const data = await apiCall(params.id);
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative ">
      {/* <Image
        src={`data:image/png;base64,${data.data.img}`}
        alt={""}
        width={200}
        height={200}
      /> */}
      {/* <MainBody data={data} /> */}
    </div>
  );
}
