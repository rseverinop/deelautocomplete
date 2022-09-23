
import '../Autocomple.css';
interface SuggestionListInterface {
    suggestions: string[];
    onClick: (selectedSuggestion: string, suggestionIndex: number) => void;
    activeSuggestion: number;
}

const SuggestionsList = ({ suggestions, onClick, activeSuggestion }: SuggestionListInterface) => {
    return (
        <ul className="suggestions">
            {suggestions.map((suggestion: string, index: number) => {
                let className;

                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                    className = "suggestion-active";
                }
                return (
                    <li className={className} key={suggestion} onClick={() => onClick(suggestion, index)}>
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    )
}

export default SuggestionsList