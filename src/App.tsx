import { Envelope } from 'phosphor-react'

import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';

import './styles/global.css';

export function App() {
  return (
    <>
      <TextInput.Root children={
        <>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input placeholder="Hello World" />
        </>
      } />

      <Checkbox />
    </>
  )
}
