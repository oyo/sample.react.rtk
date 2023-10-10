import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App'
import { Provider } from 'react-redux'
import { store } from 'features/store'
import { SharedCssBaseline, SharedThemeProvider } from '@catena-x/portal-shared-components'
import './index.scss'

ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
).render(
  <React.StrictMode>
      <SharedCssBaseline />
      <Provider store={store}>
        <SharedThemeProvider>
          <App />
        </SharedThemeProvider>
      </Provider>
  </React.StrictMode>
)
