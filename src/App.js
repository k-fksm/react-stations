// DO NOT DELETE

import *, {useState} as React from 'react'
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
      <button onClick={() => setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')}>
        更新
      </button>
      <img src={dogUrl}>
    </div>
  )
}
