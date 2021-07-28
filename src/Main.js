import { useState } from "react";

const emojiData = {
  "😀": "smile",
  "🤐": "zipped mouth",
  "😴": "sleepy",
  "😢": "crying"
};

const emojis = Object.keys(emojiData);
console.log(emojis);

const Main = () => {
  let [emoji, setEmoji] = useState("");
  let [meaning, setMeaning] = useState("Meaning will appear here...");

  const inputChangehandler = (e) => {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);
  };

  const handleClick = (emoji) => {
    console.log(emoji);
  };

  const emojiList = emojis.map((emoji) => {
    return (
      <span className="emoji" key={emoji} onClick={handleClick(emoji)}>
        {emoji}
      </span>
    );
  });

  return (
    <main>
      <input
        onChange={inputChangehandler}
        value={emoji}
        type="text"
        placeholder="search for an emoji"
      />
      <div>{meaning}</div>
      <div>{emojiList}</div>
    </main>
  );
};

module.exports = Main;
