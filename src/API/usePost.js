import { useState, useEffect } from "react";
import appSetting from "../app.setting";

const usePost = (path, data) => {
  const [isPending, setIsPending] = useState(true);
  setIsPending(true);
  fetch(appSetting.api.url + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => {
    console.log("ok");
    setIsPending(false);
  });
  return isPending;
};
export default usePost;
