import { useState } from "react"

export default function useSearch() {
    const [isList, setIsList] = useState(false);
    const [parameter, setParameter] = useState('title');

    const handleToggle = () => {
        setIsList(p => !p)
    };

    const handleParameter = (e) => {
        setParameter(e.target.value);
    }

    const handleSearch = (searchParameter, array, query) => {
        return array.filter((post) => post[searchParameter]?.includes(query))
    }

    return { isList, handleToggle, parameter, handleParameter, handleSearch }
}