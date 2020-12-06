import React, {useState} from "react";
import ReactDOM from "react-dom";

let emojis = {
    "😊": "Happy",
    "😇": "Smiling face with Halo",
    "😍": "Heart eyes"
}


const App = () => {
    let [meaning, setMeaning] = useState("");

    let emojiHandler = () => {
        let meaning = emojis[event.target.value];
        setMeaning(meaning);
    }

    return (
        <div>
            <input type="text" id="emo-input" onChange={emojiHandler}/>
            <div>
                Meaning {meaning}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));