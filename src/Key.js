import React from "react";
import bankOne from "./Object";

export default function Key(bankOne) {
  return (
    <div>
      <button type="button" id="key">
        {bankOne[0]}
      </button>
    </div>
  );
}
