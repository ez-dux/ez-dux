import { Provider } from '@ez-dux/react/lib/provider';
import React, { useEffect, useState } from 'react';

import MarkDown from './components/MarkDown';
import { initStore } from './store';

const BUTTON_CLASSES =
  'bg-purple-600 text-white p-1 rounded my-1 cursor-pointer hover:bg-purple-100 hover:text-purple-700 transition';
function getButtonClasses(selected: boolean): string {
  if (!selected) return BUTTON_CLASSES;
  return `bg-purple-100 text-purple-700 p-1 rounded my-1 cursor-pointer`;
}
function App(): React.ReactElement {
  const [selected, setSelected] = useState('@ez-dux/core');
  useEffect(() => {
    const el = document.getElementById(selected);
    if (el) {
      window.scroll({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  });
  return (
    <Provider createStore={initStore}>
      <div className="h-full">
        <header className="border-black h-20 w-full p-1 flex align-center bg-purple-100 fixed shadow">
          <h6 className="text-purple-700 text-lg font-semibold my-auto p-4">
            ez-dux
          </h6>
          <h6
            className="text-purple-500 text-lg font-semibold my-auto p-4"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5548991012435&text=hi!',
                '_blank'
              )
            }
          >
            redux mentoring?
          </h6>
        </header>
        <div className="flex flex-row pt-20">
          <div className="bg-purple-300 w-1/5 p-1">
            <div className="fixed">
              <div
                onClick={() => setSelected('@ez-dux/core')}
                className={getButtonClasses(selected === '@ez-dux/core')}
              >
                <h4>@ez-dux/core</h4>
              </div>
              <div
                onClick={() => setSelected('@ez-dux/react')}
                className={getButtonClasses(selected === '@ez-dux/react')}
              >
                <h4>@ez-dux/react</h4>
              </div>
              <div
                onClick={() => setSelected('@ez-dux/async')}
                className={getButtonClasses(selected === '@ez-dux/async')}
              >
                <h4>@ez-dux/async</h4>
              </div>
            </div>
          </div>
          <div className="bg-purple-200 w-4/5 p-8">
            <div>
              <div
                id="@ez-dux/core"
                className="bg-white p-4 rounded shadow my-1"
              >
                <MarkDown url="https://raw.githubusercontent.com/ez-dux/core/main/README.md" />
              </div>
              <div
                id="@ez-dux/async"
                className="bg-white p-4 rounded shadow my-1"
              >
                <MarkDown url="https://raw.githubusercontent.com/ez-dux/async/main/README.md" />
              </div>
              <div
                id="@ez-dux/react"
                className="bg-white p-4 rounded shadow my-1"
              >
                <MarkDown url="https://raw.githubusercontent.com/ez-dux/react/main/README.md" />
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-black h-40 p-6">
          <a className="text-white" href="https://portfolio-wag.web.app/">
            https://portfolio-wag.web.app/
          </a>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
