import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, TRENDING_ALL_DAY } from "../configs/database.config";

function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const fetchIt = async () => {
      const request = await fetch(BASE_URL + TRENDING_ALL_DAY + API_KEY)
      const data = await request.json()
      setTrendingMovies(data.results)
    }

    fetchIt()
  }, )

  return (
    <div>
      <p style={{ textAlign: 'center', marginTop:'50px', marginBottom:'70px',fontSize:'45px',fontWeight:'500' }}>Movies</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
        {
           trendingMovies.length === 0 ? (<p>Fetching Movies...</p>) : (
            trendingMovies.map((movie) => (
              <div style={{
                padding: 'none',
                margin:'5px',
              }}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' style={{
                  width: '300px',
                  height: '450px',
                  objectFit: 'cover'
                }} />
                <p style={{
                  maxWidth: '300px',
                  maxHeight: '100px',
                  textAlign: 'center',
                  fontSize: '25px',
                  color: 'black',
                  fontWeight: '700'
                }}>{movie.name || movie.title}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default Movies;