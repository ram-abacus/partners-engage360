"use client";

import { useEffect } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  targetId: string; // unique for each instance
}

export default function HubSpotForm({ portalId, formId, targetId }: HubSpotFormProps) {
  useEffect(() => {
    const scriptSrc = "https://js.hsforms.net/forms/v2.js";
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`
    );

    const renderForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: `#${targetId}`,
          region: "na2",
        });
      }
    };

    if (existingScript) {
      if (window.hbspt) renderForm();
      else existingScript.addEventListener("load", renderForm);
    } else {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = renderForm;
      document.body.appendChild(script);
    }
  }, [portalId, formId, targetId]);

  return <div id={targetId}></div>;
}
