import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 

import routes from '@/router';
import store from '@/store';
import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HYAppHeader/>
        {renderRoutes(routes)}
        <HYAppFooter/>
      </BrowserRouter>
    </Provider>
  )
})
