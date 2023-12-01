import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { errorManager } from "@/lib/utilities";
import { useCreateAdMutation, useListCategoriesQuery } from "@/types/graphql";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

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
    picture: yup.mixed().required("L'image est requise"),
    category: yup
      .number()
      .typeError("Indiquez une catégorie")
      .required("La catégory est requise"),
  })
  .required();

export default function FormReactHook() {
  const [preview, setPreview] = useState<string>("");
  const { data: dataCategories } = useListCategoriesQuery();
  // const { data: dataCategories } = useQuery(LIST_CATEGORIES);
  const [createAd] = useCreateAdMutation(
    // const [createAd] = useMutation<CreateAdMutation, CreateAdMutationVariables>(
    //   CREATE_AD,
    {
      onCompleted(data) {
        router.push(`/categories/view/${data?.createAd?.category.id}`);
      },
      onError(error, clientOptions) {
        console.log(JSON.stringify(error));
      },
    }
  );
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
    const { category, ...formulaireData } = data;
    if (data.picture.length) {
      const formData = new FormData();
      formData.append("file", data.picture[0], data.picture[0].name);
      axios
        .post(`${process.env.NEXT_PUBLIC_IMAGE_URL}/upload`, formData)
        .then((result) => {
          if (result?.data.status == "success") {
            createAd({
              variables: {
                data: {
                  ...formulaireData,
                  category: { id: category },
                  picture: result.data.filename,
                },
              },
            });
          }
        });
    }
  };

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

      <input
        type="file"
        accept="image/*"
        {...register("picture", {
          onChange: (e) => {
            setPreview(URL.createObjectURL(e.target.files[0]));
          },
        })}
        placeholder="Image"
      />
      <p>{errors.picture?.message}</p>

      {preview && (
        <div>
          <Image src={preview} alt="preview" width={50} height={50} />
        </div>
      )}

      <input {...register("location")} placeholder="Emplacement" />
      <p>{errors.location?.message}</p>

      <select {...register("category")}>
        <option>Choisissez une catégorie</option>
        {dataCategories?.listCategories.map((c: any) => (
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
