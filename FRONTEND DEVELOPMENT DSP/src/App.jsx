import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const upload = async () => {
    if (!data) {
      alert('Please select a file first')
      return
    }
    const formData = new FormData()
    formData.append('file', data)
    setLoading(true)
    setResponse('')
    try {
      const result = await axios.post('http://localhost:7000/file-upload', formData)
      console.log(result.data)
      setResponse('Upload successful: ' + JSON.stringify(result.data))
      alert('Success')
    } catch (err) {
      console.error(err)
      setResponse('Upload failed: ' + (err.response?.data?.message || err.message))
      alert('Failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="upload-container">
        <h1>File Upload</h1>
        <input
          type="file"
          onChange={(e) => setData(e.target.files[0])}
          className="file-input"
        />
        {data && <p>Selected file: {data.name}</p>}
        <button onClick={upload} className="upload-btn" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload File'}
        </button>
        {response && <p>{response}</p>}
      </div>
    </>
  )
}

export default App
