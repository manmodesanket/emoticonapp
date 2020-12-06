import React, {useState} from "react";
import ReactDOM from "react-dom";

let emojis = {
    "😊": "Happy",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Laughing",
    "😎": "Cool",
    "😜": "Crazy",
    "😋": "Goofy",
    "😇": "Smiling face with Halo",
    "😍": "Heart eyes",
    "😈": "Devil"
}


const App = () => {
    let [meaning, setMeaning] = useState("");
    let emojisList = Object.keys(emojis);

    let emojiInputHandler = () => {
        let meaning = emojis[event.target.value];
        setMeaning(meaning);
    }

    let emojiHandler = (item) => {
        let meaning = emojis[item];
        setMeaning(meaning);
    }

    return (
        <div>
            <div className="emo-input">
            <input type="text" className="input" onChange={emojiInputHandler}/>
            </div>
            <div className="meaning">
                <h2>Meaning: {meaning}</h2>
            </div>
            <div className="emojis">
                {
                    emojisList.map((item) => {
                    return <div key={item} className="item" onClick={() => emojiHandler(item)}>{item}</div>
                    })
                }
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));