import QuillMarkdown from './src/app.js'

console.log('test');

if (typeof window !== 'undefined') {
  window.QuillMarkdown = QuillMarkdown
}

export default QuillMarkdown
