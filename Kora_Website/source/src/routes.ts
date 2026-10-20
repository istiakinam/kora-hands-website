import { createHashRouter } from 'react-router'
import Root from './components/Root'
import Home from './pages/Home'
import Collection from './pages/Collection'
import OurPeople from './pages/OurPeople'

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'collection', Component: Collection },
      { path: 'people', Component: OurPeople },
    ],
  },
])
