import {useState} from "react"

const SearchBar = ({setSearchValue}) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
      setText(e.target.value)
    }

    const handleClick = () => {
         setSearchValue(text.trim());
    }

  return (
    <div id="search-component">
        <input 
          type="text" 
          value={text} 
          onChange={handleChange}
          placeholder='Search here...'
        />
      
        <button onClick={handleClick}>
            🔍
        </button>
    </div>
  )
}

export default SearchBar