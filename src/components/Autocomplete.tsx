import * as React from 'react';
import { useSearch } from '../Hooks/useSearch';
import { Exhibitions } from '../Model/Exhibitions';
import SuggestionsList from './SuggestionsList';

interface AutoCompleteInterface {
    data: Exhibitions[];
    placeholder: string;
    autoComplete: boolean;
    isLoading: boolean;
}

const Autocomplete = ({ data, autoComplete, placeholder, isLoading }: AutoCompleteInterface) => {
    const [value, setValue] = React.useState('');
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const [activeSuggestion, setActiveSuggestion] = React.useState<number>(-1);
    const { setCurrentSearch } = useSearch()

    const onClick = (selectedSuggestion: string, suggestionIndex: number) => {
        setValue(selectedSuggestion);
        setActiveSuggestion(suggestionIndex);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSuggestions([]);
        let matches: string[] = []
        if (value.length > 0) {
            matches = data.filter(ex => {
                const regex = new RegExp(`${value}`, "gi")
                return ex.match(regex);
            })
        }
        setSuggestions(matches)
        setCurrentSearch(e.target.value)
        setValue(e.target.value);
    };

    const hasSuggestions = suggestions.length > 0;

    return (
        <div style={{ width: '400px' }}>
            <input
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            />
            {isLoading && value.length > 0 && <h1>loading data</h1>}
            {
                !isLoading && value.length > 0
                && autoComplete && suggestions.length === 0
                && <h1>No Results</h1>
            }
            {
                hasSuggestions && autoComplete && !isLoading &&
                <SuggestionsList
                    suggestions={suggestions}
                    activeSuggestion={activeSuggestion}
                    onClick={onClick} />
            }
        </div>
    );
};

export default Autocomplete