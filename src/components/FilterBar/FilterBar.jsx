// @ts-nocheck
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { schemaFilter } from "../../schemas/shemas";
import {
  FilterBtn,
  FilterContainer,
  Form,
  Label,
  ResetBtn,
} from "./FilterBar.styled";

const FilterBar = ({ fn, fnQuery, placeholder }) => {
  const dispatch = useDispatch();
  const [showReset, setShowReset] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaFilter) });

  const onSubmit = (data) => {
    if (data.query !== "" || data.query !== null) {
      dispatch(fnQuery(data.query));
      setShowReset(true);
    }
  };

  const handleReset = () => {
    setValue("query", "");
    dispatch(fn());
    setShowReset(false);
  };

  return (
    <FilterContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <input
            type="text"
            {...register("query")}
            placeholder={placeholder}
            required
          />
          {showReset && (
            <ResetBtn type="button" onClick={handleReset}>
              <svg width={14} height={14}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </ResetBtn>
          )}
          <p>{errors.query?.message}</p>
        </Label>
        <FilterBtn type="submit">
          <svg width={14} height={14}>
            <use xlinkHref={`${sprite}#icon-filter`}></use>
          </svg>
          Filter
        </FilterBtn>
      </Form>
    </FilterContainer>
  );
};

export default FilterBar;
