import { useState } from 'react'
import { create } from 'ipfs-http-client'
import {Buffer} from 'buffer'

const projectId = '2LvxclAhwxJVfCYGUe7Pcwe9GoV';
const projectSecret = 'a9ca6671c29e9981e938a3fb2d61f62c';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})

function UploadFile() {
  const [fileUrl, updateFileUrl] = useState('')
  const [file, updateFile] = useState('')

  async function onChange(e) {
    updateFile(e.target.files[0])
    console.log(file)
  }

  async function onUpload() {
    try {
        const added = await client.add(file)
        const url = `https://certchain.infura-ipfs.io/ipfs/${added.path}`
        updateFileUrl(url)
        console.log(url)
    } catch (error) {
        console.log('Error uploading file: ', error)
    }
  }
  
  return (
    <div className="App">
      <h1>IPFS Example</h1>
      
      <input
        type="file"
        onChange={onChange}
      />
      <img src={fileUrl} width="200px" height="200px" />
      <p>{fileUrl}</p>
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}
export default UploadFile