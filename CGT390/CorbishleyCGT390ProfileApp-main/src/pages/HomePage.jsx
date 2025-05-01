import { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard.jsx'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'
function HomePage() {
  const [mode, setMode] = useState(false);
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const[page, setPage] = useState(1);
  const[profiles, setProfiles] = useState([]);
  const[name, setName] = useState("");
  const[count, setCount] = useState(1);
  const [clicked, setClicked] = useState(false);


  const switchMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true)
    }
    console.log(mode);
  }

  useEffect(() => {
    fetch('https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/fetch-data.php')
    .then((res) => res.json())
    .then((data) => {
      setProfiles(data);
      console.log(data)
    });
  }, []);
  
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/get-titles.php")
    .then((res) => res.json())
    .then((data) => {
      setTitles(data.titles);
    })
  }, []);

  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/fetch-data-with-filter.php?title=${title}&name=${name}&page=${page}&limit=10`)
    .then((res) => res.json())
    .then((data) => {
      setProfiles(data.profiles);
      setCount(data.count); //likely wrong
      setPage(data.page);
    })
  }, [title, name, page]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(filteredProfiles);
    //setAnimation(true);
    setPage(1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    //setAnimation(true);
    setPage(1);
  }

  const handleClear = () => {
    setTitle("");
    setName("");
    setPage(1);
  }

  const filteredProfiles = profiles.filter((profile) => {
    return (title === "" || profile.title === title) && (profile.name.toLowerCase().includes(name.toLowerCase())); //one liner
  })

  return (
      <Wrapper mode={mode}>
        <div className="filter-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="filter-select" style={{padding: '15px'}}>
            <label htmlFor='title-select'>Select a Title:</label>
            <select id="title-select" onChange={handleTitleChange} value={title}>
              <option value=""> ALL </option>
              {titles.map((title)=> (<option key={title} value={title}>{title}</option>))}
            </select>
          </div>
          <div className="filter-search" style={{padding: '15px'}}>
            <label htmlFor='name-search'>Search by Name:</label>
            <input onChange={handleNameChange} placeholder='search for a name' value={name}/>
          </div>
          <button onClick={handleClear} style={{margin: '15px', padding: '5px'}}> Clear </button>
        </div>

        <div className = "profileCardContainer" style={appStyle.profileCards}>

          {profiles.map((profile) => (
          <ProfileCard 
          key={profile.id} 
          {...profile}
           darkMode={mode}/>
          ))} 

        </div>
        {
          count === 0 && <p>No Profiles Found !</p>
        }
        { count > 10 &&  <div className="pagination">
          <button onClick={() => setPage(page-1)} disabled={page === 1}> 
            <span className="sr-only">Prev</span> </button>
          <button onClick={() => setPage(page-1)} disabled={page >= Math.floor(count/limit)}><span className="sr-only">Next</span>  </button>
        </div>
        }
        
      </Wrapper>
  )
}

export default HomePage;

const appStyle = {
  profileCards : {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '400px',
  }
}