import { useState, createContext, useContext } from "react";

interface SearchContextInterface {
    currentSearch: string;
    setCurrentSearch: (search: string) => void;
    data: string[];
    setData: (data: string[]) => void;
}

const SearchContext = createContext<SearchContextInterface>({
    currentSearch: '',
    setCurrentSearch: (search) => search,
    data: [],
    setData: (data) => data
})

export const SearchProvider = ({ search, children }: { search: string, children: React.ReactNode }) => {
    const [currentSearch, setCurrentSearch] = useState(search);
    const [data, setData] = useState<string[]>([]);

    return (
        <SearchContext.Provider value={{
            currentSearch,
            setCurrentSearch,
            data,
            setData
        }}>
            {children}
        </SearchContext.Provider>
    )
}

// This is not the best pattern design to get the information from the text field but by now
// doing like this way we avoid props drilling.
export const useSearch = () => useContext(SearchContext)
