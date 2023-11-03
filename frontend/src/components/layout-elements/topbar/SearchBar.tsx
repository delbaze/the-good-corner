import styles from "@/styles/components/layout-elements/topbar/Searchbar.module.css";
import { useListAdsWithFilterLazyQuery } from "@/types/graphql";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import Highlighter from "react-highlight-words";
function SearchBar() {
  // return <input placeholder="Rechercher" className={styles.inputSearch} />;
  const { push } = useRouter();
  const [search, { data }] = useListAdsWithFilterLazyQuery();
  const [currentSearch, setCurrentSearch] = useState("");
  console.log("%c⧭", "color: #f200e2", data);
  //choix qui est fait dans le liste
  const handleSelect = (
    e: SyntheticEvent<Element, Event>,
    value: { title: string; id: string } | null
  ) => {
    console.log(e);
    console.log(value);
    if (value) {
      push(`/ads/view/${value?.id}`);
    }
    //rediriger vers la fiche de l'annonce au clic
  };

  //?debounce (en bonus)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    console.log(e?.target.value);
    //faire l'appel au back
    if (e?.target.value) {
      setCurrentSearch(e.target.value);
      search({ variables: { filter: { title: e.target.value } } });
    }
  };
  console.log("currentSearch", currentSearch);
  return (
    <>
      <Autocomplete
        id="grouped-demo"
        options={currentSearch.length > 0 ? data?.listAdsWithFilter ?? [] : []}
        groupBy={(option) => option.category.name}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        onChange={handleSelect}
        onInputChange={(e, value, reason) => {
          if (reason === "clear" || value.length === 0) {
            setCurrentSearch("");
          }
        }}
        renderOption={(props, option) => (
          <li {...props}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              //   searchWords={["titre", "new"]}
              searchWords={currentSearch.split(" ")}
              autoEscape={true}
              textToHighlight={option.title}
            >
              {option.title}
            </Highlighter>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Rechercher une annonce"
            onChange={handleChange}
          />
        )}
      />
    </>
  );
}

export default SearchBar;
