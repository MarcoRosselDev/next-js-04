import styles from "./characters.module.css";

export default async function Characters()  {
  const data = await fetch("https://rickandmortyapi.com/api/character")
  const jsn = await data.json()
  //const a = data[1]
  //console.log(jsn);

  const results = jsn.results
  console.log(typeof(results));
  
  const div = results.map((e: any) => {
    return (
      <div id={e.id} className={styles.item}>
        <p>name: ${e.name}</p>
        <p>species: ${e.species}</p>
        <p>gender: ${e.gender}</p>
      </div>
    )
  })
  
  //map devuelve una matriz
  //forEach no devuelve nada (void) ==> solo ejecuta una accion en cada itertacion de e
  return(
    <div className={styles.main_div}>
      {
    div   
      }
    </div>
  )
}