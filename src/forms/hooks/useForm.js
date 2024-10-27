import Joi from "joi";
import { useCallback, useState } from "react";

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validateProperty = useCallback((name, value) => {
        let joiSchema = Joi.object({ [name]: schema[name] });
        let { error } = joiSchema.validate({ [name]: value });
        return error ? error.details[0].message : null;
    }, [schema])


    const handleChange = useCallback((e) => {
        let value = e.target.value;
        let name = e.target.name;

        const errorMessage = validateProperty(name, value);

        if (errorMessage) {
            setErrors((perv) => ({ ...perv, [name]: errorMessage }));
        } else {
            setErrors((perv) => {
                let obj = { ...perv };
                delete obj[name];
                return obj;
            });
        };
        setData((perv) => ({ ...perv, [name]: value }))
    }, [validateProperty]);

    const handleChangeCheckBox = useCallback((e) => {
        let value = e.target.checked;
        let name = e.target.name;
        setData((perv) => ({ ...perv, [name]: value }))
    }, []);

    const validateForm = useCallback(() => {
        const joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);

        if (error) return false;
        return true;
    }, [schema, data]);

    const handleReset = useCallback(() => {
        setData(initialForm);
        setErrors({})
    }, [initialForm]);

    const onSubmit = useCallback(() => {
        handleSubmit(data);
    }, [data]);


    return {
        data,
        setData,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox
    }
};