import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<Category[]>([
    {
      id: 1,
      name: "Chaussures",
    },
    {
      id: 2,
      name: "Vêtements",
    },
    {
      id: 3,
      name: "Voitures",
    },
    {
      id: 4,
      name: "Sports et loisirs",
    },
  ]);
  // const [newCategoryInput, setNewCategoryInput] = useState<string>("");
  // const [error, setError] = useState<string>("");

  const [state, setState] = useState({
    error: "",
    newCategoryInput: "",
  });

  // useEffect(() => {
  //   console.log("Je suis dans le use effect sans dépendances");
  // }); //joué a chaque (re)rendu de composant


  useEffect(() => {
    //fetch les categories
  }, []); //joué uniquement au premier chargement de composant

  useEffect(() => {
    console.log("Je suis dans le use effect des erreurs", state.error);
  }, [state.error, state.newCategoryInput]); //joué a chaque fois que la dépendance change de valeur

  useEffect(() => {
    console.log("Je suis dans le use effect de l'input qui change", state.newCategoryInput);
  }, [state.newCategoryInput]); //joué a chaque fois que la dépendance change de valeur

  const handleDelete = (id: number) => {
    const categories = [...data]; //deep clone
    setData(categories.filter((category) => category.id !== id));
  };
  // const handleDeleteDataSet = (e: any) => {
  // const handleDeleteDataSet = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.target.dataset);
  //   // const categories = [...data]; //deep clone

  //   // setData(categories.filter((category) => category.id !== id));
  //   //supprimer du tableau data
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //stocker la valeur
    // setNewCategoryInput(e.target.value);
    setState({ ...state, newCategoryInput: e.target.value });
  };

  const addCategory = () => {
    const cat = data.find(
      (category) => category.name === state.newCategoryInput
    );
    if (cat) {
      // setError("il y a une erreur, elle existe déjà");
      setState({ ...state, error: "il y a une erreur, elle existe déjà" });
      return;
    }
    //si tout se passe bien :
    const id = data.length > 0 ? data[data.length - 1]?.id + 1 : 1; // data[3] //prévoir si data est vide //
    setData([...data, { id, name: state.newCategoryInput }]); // ECMA 6 + ES6

    //remise à 0
    // setNewCategoryInput("");
    // setError(""); //je supprime l'erreur existante s'il y en a une
    setState({ ...state, error: "", newCategoryInput: "" });
  };
  return (
    <>
      <h1>Liste des catégories</h1>
      <div>
        <ul>
          {data.map((category) => (
            <li key={category.id}>
              {category.name}
              <button onClick={() => handleDelete(category.id)}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>

        <label>
          Créer une categorie
          <br />
          <input value={state.newCategoryInput} onChange={handleChange} />
          <br />
          {state.error}
          <br />
          <button onClick={addCategory}>Ajouter</button>
        </label>
      </div>
    </>
  );
}
