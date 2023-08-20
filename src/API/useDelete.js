import { useState, useEffect } from "react";
import appSetting from "../app.setting";
const useDelete = (id) => {
  fetch(appSetting.api.url + "contacts/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      response.json();
      console.log("Delete");
    })
    .then(() => {
      (values) => {
        return values.filter((item) => item.id !== id);
      };
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export default useDelete;
