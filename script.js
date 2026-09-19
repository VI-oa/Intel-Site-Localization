const rtlLanguages = ["ar", "dv", "fa", "he", "ku", "ps", "sd", "ug", "ur", "yi"];

function updateTextDirection() {
  const language = (document.documentElement.lang || document.body.lang || "en")
    .toLowerCase()
    .split("-")[0];
  const direction = rtlLanguages.includes(language) ? "rtl" : "ltr";

  document.documentElement.dir = direction;
  document.body.dir = direction;
}

updateTextDirection();

const languageObserver = new MutationObserver(updateTextDirection);

languageObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"]
});

languageObserver.observe(document.body, {
  attributes: true,
  attributeFilter: ["lang"]
});