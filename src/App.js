// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/collie-border/n02106166_3447.jpg');
  return (
    <div>
      <header>
        Dogアプリ
      </header>
      犬の画像を表示するサイトです。
      <button onClick={fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogUrl(data.message))
      }>
        更新
      </button>
      <img src={dogUrl}>
    </div>
  )
}
