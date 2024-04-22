import { useState } from "react";
import styles from "./form.module.css";
import { Input, Select, Button } from "../Shared";
import { useForm } from "react-hook-form";
import foodSchema from "../../Components/Form/Validation/foodSchema.js";
import { joiResolver } from "@hookform/resolvers/joi";

const Form = ({ foodData, id, setShowForm, handleUpdateItem, handleAddItem }) => {
  const [isLoading, setIsLoading] = useState(false);

  const foodDataUpdate = {
    name: foodData?.name || "",
    description: foodData?.description || "",
    price: foodData?.price || "",
    stock: foodData?.stock || "",
    rating: foodData?.rating || "",
    image: foodData?.image || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: joiResolver(foodSchema),
    defaultValues: { ...foodDataUpdate },
  });

  const updateFood = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/food/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("successfully updated food");
        handleUpdateItem({ ...data, id });
        setShowForm(false);
      } else {
        console.log("cannot update food");
      }
    } catch (error) {
      console.error("Error updating food", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createFood = async (data) => {
    setIsLoading(true);
    try {
      const response= await fetch(`${import.meta.env.VITE_API_URL}/food`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        console.log("successfully created food");
        const responseData = await response.json();
        handleAddItem({ ...data, id: responseData.id });
        setShowForm(false);
      } else {
        console.log("cannot create food");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = (data) => {
    if (id) {
      updateFood(data);
    } else {
      createFood(data);
    }
  };

  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.formContainer}`}>
      <form
        className={`d-flex flex-column justify-content-center align-items-center rounded-3 position-absolute  ${styles.formBox}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <img
          className={`position-absolute ${styles.closeIcon}`}
          src="/assets/icons/close.png"
          alt="close icon"
          onClick={() => setShowForm(false)}
        />
        <h1 className={`${styles.formTitle}`}>{id ? "Update" : "Create"} Product</h1>
        <div className={`d-flex flex-column flex-lg-row ${styles.inputsContainer}`}>
          <Input
            name={"name"}
            register={register}
            type={"text"}
            placeholder={"Name of food"}
            errors={errors.name?.message}
          />
          <Input
            name={"description"}
            register={register}
            type={"text"}
            placeholder={"Ingredients"}
            errors={errors.description?.message}
          />
        </div>
        <div className={`d-flex flex-column flex-lg-row ${styles.inputsContainer}`}>
          <Input
            name={"price"}
            register={register}
            type={"number"}
            placeholder={"Price"}
            errors={errors.price?.message}
          />
          <Select
            name={"stock"}
            register={register}
            title={"Stock"}
            data={["In Stock", "Out of Stock"]}
            values={[true, false]}
            errors={errors.stock?.message}
          />
        </div>
        <div className={`d-flex flex-column flex-lg-row ${styles.inputsContainer}`}>
          <Select
            name={"rating"}
            register={register}
            title={"Stars"}
            data={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
            values={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
            errors={errors.rating?.message}
          />
          <Input
            name={"image"}
            register={register}
            type={"url"}
            placeholder={"Image URL"}
            errors={errors.image?.message}
          />
        </div>
        <div className={` ${styles.buttonBox}`}>
          <Button isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
};

export default Form;
