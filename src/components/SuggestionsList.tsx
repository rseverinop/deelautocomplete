
interface SuggestionListInterface {
    suggestions:any;
    onClick:any;
    activeSuggestion:any;
}

const SuggestionsList = ({suggestions, onClick, activeSuggestion}: SuggestionListInterface) => {
    return (
        <ul className="suggestions">
            {suggestions.map((suggestion: any, index: number) => {
                let className;

                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                    className = "suggestion-active";
                }
                return (
                    <li className={className} key={suggestion} onClick={onClick}>
                        {suggestion}
                    </li>
                );
            })}
        </ul>
    )
}

export default SuggestionsList