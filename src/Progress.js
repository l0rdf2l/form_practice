import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Progress = props => {
  const { register, handleSubmit } = useForm();
  const { state, action } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
    props.history.push("./Result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Production Progress</h1>
      <label htmlFor="Quantity">Quantity</label>
      <input
        type="number"
        placeholder="182.000"
        name="quantity"
        ref={register}
        defaultValue={state.data.quantity}
      />

      <label htmlFor="TIME">TIME</label>
      <input
        type="time"
        placeholder="Time"
        name="time"
        ref={register}
        defaultValue={state.data.time}
      />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Progress);
