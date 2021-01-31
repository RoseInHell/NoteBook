import React from 'react';

import { UserContext, ThemeContext } from '../App';

export default function ContextHookDemo() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      
    </div>
  )
}
