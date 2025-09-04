import { Button } from 'vite-lib'
import 'vite-lib/dist/vite-lib.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Vite Library Demo</h1>

      <div className="button-container">
        <h2>Primary Buttons</h2>
        <div className="button-row">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>

        <h2>Secondary Buttons</h2>
        <div className="button-row">
          <Button variant="secondary" size="small">
            Small
          </Button>
          <Button variant="secondary" size="medium">
            Medium
          </Button>
          <Button variant="secondary" size="large">
            Large
          </Button>
        </div>

        <h2>Outline Buttons</h2>
        <div className="button-row">
          <Button variant="outline" size="small">
            Small
          </Button>
          <Button variant="outline" size="medium">
            Medium
          </Button>
          <Button variant="outline" size="large">
            Large
          </Button>
        </div>

        <h2>Disabled State</h2>
        <div className="button-row">
          <Button disabled>Primary</Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
