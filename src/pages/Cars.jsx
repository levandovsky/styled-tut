import {useState} from "react";
import {Block} from "../atoms/Block";
import {Field} from "../molecules/Field";

export const Cars = () => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Block>
            <Field label="Field one" value={text} onChange={handleChange} />
            <Field label="Field two" value={text} readOnly />
        </Block>
    );
};
