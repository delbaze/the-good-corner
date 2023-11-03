import styles from "@/styles/pages/ads/Form.module.css";
import { IAdForm, FormEditOrCreate, IUpdateForm } from "@/types/ads";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useListCategoriesQuery,
  useCreateAdMutation,
  useUpdateAdMutation,
  CreateAdInput,
  UpdateAdInput,
  FindForEditAdByIdQuery,
} from "@/types/graphql";
interface IError {
  field: string | null;
  message: string;
}

function Form({ data }: { data: FindForEditAdByIdQuery["findAdById"] }) {
  const { createdAt, updatedAt, ...initialData } = data;

  const router = useRouter();

  const { data: categoriesData } = useListCategoriesQuery();
  // const { data: categoriesData } = useQuery<
  //   ListCategoriesQuery,
  //   ListCategoriesQueryVariables
  // >(LIST_CATEGORIES);

  const [createAd] = useCreateAdMutation({
    onCompleted(data) {
      router.push(`/categories/view/${data.createAd.category?.id}`);
    },
  });

  const [updateAd] = useUpdateAdMutation({
    onCompleted(data) {
      router.push(`/categories/view/${data.updateAd.category?.id}`);
    },
  });

  const [errors, setErrors] = useState<IError[]>([] as IError[]);
  const [formulaireData, setFormulaireData] = useState<CreateAdInput>(
    {} as CreateAdInput
  );

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);
  useEffect(() => {
    if (initialData) {
      setFormulaireData(initialData);
    }
  }, []);

  useEffect(() => {
    console.log(formulaireData);
  }, [formulaireData]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    let value: number | string | { id: number } = "";
    switch (e.target.name) {
      case "category":
        value = { id: +e.target.value };
        break;
      case "price":
        value = +e.target.value;
        break;
      default:
        value = e.target.value;
    }
    console.log(value);
    // const data =
    //   e.target.name === "category" ? { id: +e.target.value } : e.target.value; //cas particulier au cas où on est dans le select
    setFormulaireData({ ...formulaireData, [e.target.name]: value }); //{...formulaireData, title: valeur}
  };

  const getError = (field: string) => {
    let errorText = "";
    if (errors.length) {
      let error = errors.find((e) => e.field === field);
      if (error) {
        errorText = error.message;
      }
    }

    return errorText;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);

    if (!initialData) {
      createAd({
        variables: {
          data: formulaireData as CreateAdInput,
        },
      });

      // axiosInstance
      //   .post("/ads/create", formulaireData)
      //   .then(({ data }) => {
      //     //si tout se passe bien, rediriger vers la catégorie
      //     router.push(`/categories/view/${data.category?.id}`);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setErrors(err.response.data?.errors);
      //   });
    } else {
      //faire l'update
      // axiosInstance
      //   .patch(`/ads/update/${initialData.id}`, formulaireData)
      //   .then(({ data }) => {
      //     router.push(`/categories/view/${data.category?.id}`);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setErrors(err.response.data?.errors);
      //   });

      const formD = formulaireData as UpdateAdInput;

      updateAd({
        variables: {
          data: { ...formD, id: router.query.id as string },
        },
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="titre"
        className={styles.inputForm}
        onChange={handleChange}
        value={formulaireData.title}
      />
      <span>{getError("title")}</span>
      <input
        name="description"
        placeholder="description"
        className={styles.inputForm}
        onChange={handleChange}
        value={formulaireData.description ?? ""}
      />
      <input
        name="owner"
        placeholder="owner"
        className={styles.inputForm}
        onChange={handleChange}
        value={formulaireData.owner}
      />
      <input
        name="price"
        placeholder="price"
        className={styles.inputForm}
        onChange={handleChange}
        type="number"
        step=".01"
        pattern="[0-9]*"
        value={formulaireData.price}
      />
      <span>{getError("price")}</span>

      <input
        name="location"
        placeholder="location"
        className={styles.inputForm}
        onChange={handleChange}
        value={formulaireData.location}
      />
      <input
        name="picture"
        placeholder="picture"
        className={styles.inputForm}
        onChange={handleChange}
        value={formulaireData.picture}
      />
      <select
        className={styles.inputForm}
        onChange={handleChange}
        name="category"
        value={formulaireData.category?.id}
      >
        <option>Choisissez une catégorie</option>
        {categoriesData?.listCategories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button>{initialData ? "Editer l'annonce" : "Ajouter l'annonce"}</button>
    </form>
  );
}

export default Form;
