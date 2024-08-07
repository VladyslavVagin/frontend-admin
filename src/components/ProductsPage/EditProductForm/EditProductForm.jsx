// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { editProduct } from "../../../redux/products/operations";
import { editProductSchema } from "../../../schemas/shemas";
import Modal from "../../Common/Modal/Modal";
import ButtonsModal from "../../Common/ButtonsModal/ButtonsModal";
import CategorySelect from "../AddProductForm/CategorySelect/CategorySelect";
import SuppliersSelect from "../AddProductForm/SuppliersSelect/SuppliersSelect";
import {
  Form,
  Input,
  TitleForm,
  InvisibleInput,
  ErrorText,
  FlexInputContainer,
} from "../AddProductForm/AddProductForm.styled";

const EditProductForm = ({ setIsEdit, product, setIsSubmitting }) => {
  const [categoryValue, setCategoryValue] = useState(product.category);
  const [suppliersValue, setSuppliersValue] = useState(product.suppliers);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editProductSchema) });

  useEffect(() => {
    if (categoryValue) {
      setValue("category", categoryValue);
    }

    if (suppliersValue) {
      setValue("suppliers", suppliersValue);
    }
  }, [categoryValue, suppliersValue, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsEdit(false);
    await dispatch(editProduct({ data, id: product._id }));
    setIsSubmitting(false);
    toast.success("Product edited successfully");
  };

  return (
    <Modal fn={setIsEdit}>
      <TitleForm>Edit product</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexInputContainer>
          <label>
            <Input
              type="text"
              {...register("name")}
              defaultValue={product.name}
              placeholder="Product Info"
            />
            <ErrorText>{errors?.name?.message}</ErrorText>
          </label>
          <label>
            <CategorySelect
              categoryValue={categoryValue}
              setCategoryValue={setCategoryValue}
            />
            <ErrorText>{errors?.category?.message}</ErrorText>
            <InvisibleInput
              {...register("category")}
              defaultValue={product.category}
              type="text"
            />
          </label>
        </FlexInputContainer>
        <FlexInputContainer>
          <label>
            <SuppliersSelect
              suppliersValue={suppliersValue}
              setSuppliersValue={setSuppliersValue}
            />
            <ErrorText>{errors?.suppliers?.message}</ErrorText>
            <InvisibleInput
              {...register("suppliers")}
              defaultValue={product.suppliers}
              type="text"
            />
          </label>
          <label>
            <Input
              type="text"
              {...register("stock")}
              defaultValue={product.stock}
              placeholder="Stock"
            />
            <ErrorText>{errors?.stock?.message}</ErrorText>
          </label>
        </FlexInputContainer>
        <label>
          <Input
            type="text"
            {...register("price")}
            placeholder="Price"
            defaultValue={product.price}
          />
          <ErrorText>{errors?.price?.message}</ErrorText>
        </label>
        <ButtonsModal title="Save" cancelAction={setIsEdit} />
      </Form>
    </Modal>
  );
};

export default EditProductForm;
