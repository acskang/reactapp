import React from "react";

function SimpleForm() {
  return (
    <div>
      <form>
        <labal htmlFor="name">Name</labal>
        <input type="text" id="name" name="name" />
        <labal htmlFor="email">E-mail</labal>
        <input type="email" id="email" name="email" />
        <labal htmlFor="channel">Channel</labal>
        <input type="text" id="channel" name="channel" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
