import React from 'react'
import ComponentC from "./component-c"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const Context = () => {
  return (
    <div className="Context">
      <UserContext.Provider value={'MadieOn'}>
        <ChannelContext.Provider value={"channelOn"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Context;