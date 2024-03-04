export async function GET(req:Request) {
    try{
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        const res = await fetch(`https://crudcrud.com/api/609c404be9e14cca90fedd3409a9e1fa/books/${id}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
            }
        })
        
        const data = await res.json()

        return Response.json({ data })
    }catch(error:any){
        return Response.json(error.message)
    }
}



