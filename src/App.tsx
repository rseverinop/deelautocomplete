import { useEffect, useState } from 'react';
import './App.css'
import Autocomplete from './components/Autocomplete';
import { useSearch } from './Hooks/useSearch';
import { getAPIData } from './Services/Exhibitions';

function App() {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const { currentSearch, setData } = useSearch()

  useEffect(() => {
    setIsloading(true)
    const getExhibition = async () => {
      if (currentSearch) {
        const fetchedExhibitions = await getAPIData(currentSearch)
        setData(fetchedExhibitions)
        setIsloading(false)
      }
    }
    // this timeout going to call de api when the user ends to type...
    const delayDebounceFn = setTimeout(() => {
      getExhibition()
    }, 3000)

    return () => clearTimeout(delayDebounceFn)

  }, [currentSearch, setData])

  return (
    <div className="App">
      <Autocomplete
        useAutoComplete
        placeholder='Deel Engineer, Search here...'
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
