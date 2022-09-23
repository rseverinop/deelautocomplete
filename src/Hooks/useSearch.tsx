import { useState, createContext, useContext } from "react";

const SearchContext = createContext<any>({
    currentSearch:'',
    setCurrentSearch:(search:string)=> search,
})

export const SearchProvider = ({ search, children }: { search: string, children: React.ReactNode }) => {
    const [currentSearch, setCurrentSearch] = useState(search);

    return (
        <SearchContext.Provider value={{
            currentSearch,
            setCurrentSearch,
        }}>
            {children}
        </SearchContext.Provider>
        )
}

// This is not the best pattern design to get the information from the text field but by now
// doing like this way we avoid props drilling.
export const useSearch = () => useContext(SearchContext)
