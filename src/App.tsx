import { useEffect, useState } from 'react';
import './App.css'
import Autocomplete from './components/Autocomplete';
import { useSearch } from './Hooks/useSearch';
import { getAPIData } from './Services/Exhibitions';

function App() {
  const [exhibitions, setExhibitions] = useState<string[]>([])
  const [isLoading, setIsloading] = useState<boolean>(false)
  const { currentSearch } = useSearch()

  useEffect(() => {
    setIsloading(true)
    const getExhibition = async () => {
      if (currentSearch) {
        const exhibitions = await getAPIData(currentSearch)
        setExhibitions(exhibitions)
        setIsloading(false)
      }
    }

    // this timeout going to call de api when the user ends to type...
    const delayDebounceFn = setTimeout(() => {
      getExhibition()
    }, 3000)
    
    return () => clearTimeout(delayDebounceFn)
    
  }, [currentSearch])

  return (
    <div className="App">
      <Autocomplete
        data={exhibitions}
        autoComplete
        placeholder='Search here...'
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
