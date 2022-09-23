import * as React from 'react';
import { useSearch } from '../Hooks/useSearch';
import SuggestionsList from './SuggestionsList';

interface AutoCompleteInterface {
    placeholder: string;
    useAutoComplete: boolean;
    isLoading: boolean;
}

const Autocomplete = ({ useAutoComplete, placeholder, isLoading }: AutoCompleteInterface) => {
    const [value, setValue] = React.useState('');
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const [activeSuggestion, setActiveSuggestion] = React.useState<number>(-1);
    const { currentSearch, setCurrentSearch, data } = useSearch()

    const existSuggestions = suggestions.length > 0;

    const onClick = (selectedSuggestion: string, suggestionIndex: number) => {
        setValue(selectedSuggestion);
        setActiveSuggestion(suggestionIndex);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSearch(e.target.value);
        setValue(e.target.value);
    };

    React.useEffect(() => {
        setSuggestions([]);
        let matches: string[] = []
        if (value.length > 0) {
            matches = data.filter(ex => {
                const regex = new RegExp(`${value}`, "gi")
                return ex.match(regex);
            })
        }
        setSuggestions(matches)
    }, [data])


    return (
        <div style={{ width: '400px' }}>
            <input
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            />
            { isLoading && currentSearch.length > 0 && <h2>loading data</h2>}
            {
                !isLoading && value.length > 0
                && useAutoComplete && !existSuggestions
                && currentSearch.length > 0 && <h2>No Results</h2>
            }
            {
                existSuggestions && useAutoComplete && !isLoading &&
                <SuggestionsList
                    suggestions={suggestions}
                    activeSuggestion={activeSuggestion}
                    onClick={onClick} />
            }
        </div>
    );
};

export default Autocomplete