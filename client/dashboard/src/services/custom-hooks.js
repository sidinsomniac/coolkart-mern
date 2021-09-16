import { useState } from "react";

export const useInput = (type, initialValue, placeholder = "", errorMessages) => {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value);
    };

    return {
        value,
        setValue,
        onChange,
        type,
        placeholder,
        ...(errorMessages && { isInvalid: errorMessages })
    };
};