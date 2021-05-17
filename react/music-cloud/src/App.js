import React, { memo, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import AppFooter from '@/components/app-footer/appFooter.js';




export default memo(function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <AppFooter/>
    </BrowserRouter>
  )
})
