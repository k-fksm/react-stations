// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/collie-border/n02106166_3447.jpg');
  const updateImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if(data.status === "success"){
          setDogUrl(data.message)}})}
  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <body>
        <p>犬の画像を表示するサイトです。</p>
        <button class='c-button' onClick={updateImage}>
          Update
        </button>
        <p></p>
        <img src={dogUrl}/>
      </body>
    </div>
  )
}
