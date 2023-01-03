import React, { useEffect } from "react";
// @ts-ignore
import Instafeed from "instafeed.js";

export default function Teste() {
  useEffect(() => {
    let feed = new Instafeed({
      accessToken:
        "IGQVJVZAFgwamlBNjVLTGxVWWtzaXhKNjJpVmwxX0pybDA5UTJrbVZAkdUU5d3JrakE3OUc4N04xaXlNMVNmZAk5xTTIzSV9acG1HQVZAQdENEd3JpbS0tYUNBUzhxMm9KMHNVSWFwRlBRMnNIa3dXOVRRNQZDZD",
    });
    feed.run();
  }, []);

  return <div id="instafeed"></div>;
}
