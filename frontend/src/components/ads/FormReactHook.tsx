import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { Category } from "@/types/categories";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/router";
import { errorManager } from "@/lib/utilities";
const schema = yup
  .object({
    title: yup.string(),
    // .min(5, "la longueur doit être de 5 caractères minimum")
    // .required("Le prénom est requis"),
    description: yup.string(),
    owner: yup.string().required("Le créateur est requis"),
    price: yup
      .number()
      .typeError("Ca doit être un nombre")
      .positive("Le nombre doit être positif")
      .required("Le prix est requis"),
    location: yup.string().required("L'emplacement est requis"),
    picture: yup.string().required("L'image est requise"),
    category: yup
      .number()
      .typeError("Indiquez une catégorie")
      .required("La catégory est requise"),
  })
  .required();

export default function FormReactHook() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  console.log("errors", errors);
  const onSubmit = (data: any) => {
    console.log("ON SUBMIT", data);
    const { category, ...formulaireData } = data;

    axiosInstance
      .post("/ads/create", { ...formulaireData, category: { id: category } })
      .then(({ data }) => {
        //si tout se passe bien, rediriger vers la catégorie
        router.push(`/categories/view/${data.category.id}`);
      })
      .catch((err) => {
        console.log(err);
        errorManager(setError, err)
        // setErrors(err.response.data?.errors);
      });
  };

  useEffect(() => {
    axiosInstance
      .get<Category[]>("/categories/list", {})
      .then(({ data }) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });

    // if (initialData) {
    //   setFormulaireData(initialData);
    // }
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Titre" />
      <p>{errors.title?.message}</p>

      <input {...register("description")} placeholder="Description" />
      <p>{errors.description?.message}</p>

      <input {...register("owner")} placeholder="Créateur" />
      <p>{errors.owner?.message}</p>

      <input {...register("price")} placeholder="Prix" />
      <p>{errors.price?.message}</p>

      <input {...register("picture")} placeholder="Image" />
      <p>{errors.picture?.message}</p>

      <input {...register("location")} placeholder="Emplacement" />
      <p>{errors.location?.message}</p>

      <select {...register("category")}>
        <option>Choisissez une catégorie</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <p>{errors.category?.message}</p>

      <input type="submit" />
    </form>
  );
}
