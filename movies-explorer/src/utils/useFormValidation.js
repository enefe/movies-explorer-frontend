import React from "react";

export default function useFormValidation(item) {
    const [values, setValues] = React.useState(item);
    const [errors, setErrors] = React.useState({});
    const [valid, setValid] = React.useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        setValues({...values, [name]: value});

        setErrors({...errors, [name]: target.validationMessage});

        setValid(target.closest("form").checkValidity());
    };

    const resetForm = React.useCallback(
        (newValues = {}, newErrors = {}, newValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setValid(newValid);
        },
        [setValues, setErrors, setValid]
    );

    return {values, errors, valid, handleChange, resetForm};
}
