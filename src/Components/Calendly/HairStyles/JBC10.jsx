import React, { useEffect } from "react";

const JBC10 = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-container">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/jbcbraids/jbc-10?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=ffcf40"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default JBC10;
