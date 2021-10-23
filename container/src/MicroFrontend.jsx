import React, { useEffect } from "react";
import { MessageBus } from "@podium/browser";

function MicroFrontend({ name, host }) {
  const messageBus = new MessageBus();

  useEffect(() => {
    const scriptId = `microfrontend-script-${name}`;
    const linkId = `microfrontend-link-${name}`;

    const notifyRender = () => {
      messageBus.publish("box", "message", "mount");
    };
    if (!!document.getElementById(scriptId)) {
      console.log("ya existe ese JavaScript");
      notifyRender();
      return;
    } else {
      fetch(`${host}/manifest.json`)
        .then((res) => res.json())
        .then((manifest) => {
          const script = document.createElement("script");
          script.type = "module";
          script.id = scriptId;
          script.crossOrigin = "";
          script.src = host + "/" + manifest["index.html"].file;
          script.onload = () => {
            notifyRender();
          };
          document.head.appendChild(script);

          const linkCss = document.createElement("link");
          linkCss.rel = "stylesheet";
          linkCss.id = linkId;
          linkCss.href = host + "/" + manifest["index.html"].css;
          linkCss.onload = () => {
            notifyRender();
          };
          document.head.appendChild(linkCss);
        });
    }

    return () => {
      messageBus.publish("box", "message", "unmount");
    };
  });

  return <div id={name} />;
}

export default MicroFrontend;
