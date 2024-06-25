export default async function Characters()  {
  const data = await fetch("https://rickandmortyapi.com/api/character")
  await data.json()
  const a = data[1]
  console.log(a);

  return(
    <div>
      <p>Hola</p>
      <p>
        
        {}
        </p>
    </div>
  )
}