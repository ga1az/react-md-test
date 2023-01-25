import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import './App.css'

// consumir api http://144.22.46.13:8080/api/articles

function App() {
  const [articles, setArticles]: any = useState([])

  useEffect(() => {
    fetch('http://144.22.46.13:8080/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data.data)) 
  }, [])
  return (
    <div>
      {articles.map((article: any) => (
        <div key={article.id} style={{
          textAlign: 'left',
        }}>
          <h1>{article.attributes.title}</h1>
          <ReactMarkdown
            children={article.attributes.content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            
          />
        </div>
      ))}
    </div>
  )
}

export default App
