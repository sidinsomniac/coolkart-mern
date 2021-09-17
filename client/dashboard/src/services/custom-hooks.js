import { useState } from "react";

export const useInput = (type, initialValue, placeholder = "", errorMessages) => {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value);
    };

    const resetValue = () => {
        setValue("");
    };

    return {
        value,
        resetval: resetValue,
        onChange,
        type,
        placeholder,
        ...(errorMessages && { isInvalid: errorMessages })
    };
};