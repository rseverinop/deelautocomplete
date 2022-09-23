import * as React from 'react';
import SuggestionsList from './SuggestionsList';

 const Autocomplete: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [activeSuggestion, setactiveSuggestion] = React.useState([]);

  React.useEffect(() => {
  }, []);

  const onClick = (e:any) => {

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  const hasSuggestions = suggestions.length > 0;

  return (
    <div style={{ width: '400px' }}>
      <input
        onChange={handleChange}
        value={value}
        placeholder="start typing"
      />
      {hasSuggestions && <SuggestionsList suggestions={suggestions} activeSuggestion={activeSuggestion} onClick={onClick}/>}
    </div>
  );
};

export default Autocomplete