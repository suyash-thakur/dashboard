

import React, { useState } from 'react';

export const Head = () => {
const logout = () => Meteor.logout();

  return (
    <div className="header-container">
    <div>
        Dashboard
    </div>
    <div id="header-register-button" onClick={logout}> 
              <div>
                  Log Out
        </div>
    </div>
</div>
  );
};
