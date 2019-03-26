import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Application from './components/Application';
import store from './store';
import DocumentMeta from 'react-document-meta';

const globalHtmlMetaTags = {
  title: '<%= name %>',
  description: '<%= description %>',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'
    }
  }
};

// Create main element
const mainElement = document.createElement('main');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <DocumentMeta {...globalHtmlMetaTags}>
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>
    </DocumentMeta>,
    mainElement
  );
};

render(Application);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
  module.hot.accept('./components/Application', () => {
    import('./components/Application').then(World => {
      render(World.default);
    });
  });
}
