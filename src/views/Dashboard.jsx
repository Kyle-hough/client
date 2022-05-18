import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Dashboard = () => {
  const [songs, setSongs] = useState([])
  useEffect(() =>{
    axios.get(`http://localhost:8000/api/songs`)
    .then(response =>{
      setSongs(response.data)
      console.log(response.data)
    })
    .catch (error => console.error(error))

  },[])

  return (
    <fieldset>
      <legend>Dashboard</legend>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {
          songs.map((song, i) => (
            <tr key={i}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.rating}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

    </fieldset>
  )
}

export default Dashboard