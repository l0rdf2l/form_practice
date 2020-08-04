import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const MainForm = props => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
    props.history.push("./Progress");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Production Finished Good Cases Report</h1>
      <label htmlFor="DATE">DATE</label>
      <input
        type="date"
        placeholder="Date"
        name="date"
        ref={register}
        defaultValue={state.data.date}
      />

      <label htmlFor="Production Line">Production Line</label>
      <select
        name="productionLine"
        ref={register({ required: true })}
        defaultValue={state.data.productionLine}
      >
        <option value="LINE #01 - BAG">LINE #01 - BAG</option>
        <option value=" LINE #02 - BAG"> LINE #02 - BAG</option>
        <option value=" LINE #03 - TRAY"> LINE #03 - TRAY</option>
        <option value=" LINE #04 - POUCH"> LINE #04 - POUCH</option>
        <option value=" VSM Room 1 - MANUAL/BAG/GRILLER">
          {" "}
          VSM Room 1 - MANUAL/BAG/GRILLER
        </option>
        <option value=" VSM Room 2 - MANUAL/BAG/GRILLER">
          {" "}
          VSM Room 2 - MANUAL/BAG/GRILLER
        </option>
      </select>

      <label htmlFor="Pallet no.">Pallet no.</label>
      <input
        type="number"
        placeholder="909882"
        name="palletNumber"
        ref={register}
        defaultValue={state.data.palletNumber}
      />

      {/* <label htmlFor="TIME">TIME</label>
      <input
        type="time"
        placeholder="Time"
        name="time"
        ref={register}
        defaultValue={state.data.time}
      /> */}

      {/* <label htmlFor="CHECK BY">CHECK BY</label>
      <input
        type="text"
        placeholder="J.O"
        name="checkBy"
        ref={register}
        defaultValue={state.data.checkBy}
      /> */}

      <label htmlFor="Item no.">Item no.</label>
      <input
        type="number"
        placeholder="9053040685"
        name="itemNumber"
        ref={register}
        defaultValue={state.data.itemNumber}
      />

      <label htmlFor="Item Description">Item Description</label>
      <input
        type="text"
        placeholder="AS-S LEMON DILL SALMON 6/8.5OZ"
        name="itemDescription"
        ref={register}
        defaultValue={state.data.itemDescription}
      />

      <label htmlFor="Lot no.">Lot no.</label>
      <input
        type="text"
        placeholder="SO51991"
        name="lotNumber"
        ref={register}
        defaultValue={state.data.lotNumber}
      />

      <label htmlFor="Quantity">Quantity</label>
      <input
        type="number"
        placeholder="182.000"
        name="quantity"
        ref={register}
        defaultValue={state.data.quantity}
      />

      <label htmlFor="Reference no.">Reference no.</label>
      <input
        type="text"
        placeholder="16/17/2022 21 3766"
        name="referenceNumber"
        ref={register}
        defaultValue={state.data.referenceNumber}
      />

      <input type="submit" />
    </form>
  );
};

export default withRouter(MainForm);
