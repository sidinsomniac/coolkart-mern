import { useState } from "react";

export const useInput = (type, initialValue, placeholder = "") => {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange,
        type,
        placeholder
    };
};