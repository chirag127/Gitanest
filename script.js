// Bhagavad Gita has 18 chapters; slokcount[i] = verses in chapter i+1.
const slokcount = [
  47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
];
const chapter = Math.floor(Math.random() * 18) + 1;
const slok = Math.floor(Math.random() * slokcount[chapter - 1]) + 1;
const gitaslok_url = `https://vedicscriptures.github.io/slok/${chapter}/${slok}/`;

fetch(gitaslok_url)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then((sData) => {
    const verse = sData.slok || "";
    const meaning = (sData.siva && sData.siva.et) || "Meaning unavailable.";
    document.getElementById("sp").textContent = `${chapter}.${slok} — ${verse}`;
    document.getElementById("mp").textContent = meaning;
  })
  .catch((err) => {
    document.getElementById("sp").textContent =
      "Could not load a verse. Check your connection and try again.";
    document.getElementById("mp").textContent = `(${err.message})`;
  });
