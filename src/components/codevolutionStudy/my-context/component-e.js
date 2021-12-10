import {useContext} from 'react';
import ComponentF from "./component-f"
import {UserContext, ChannelContext} from "."

const ComponentE = () => {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      <ComponentF />
      <h3>ComponentE(user): {user}</h3>
      <h3>ComponentE(channel): {channel}</h3>
    </div>
  );
};

export default ComponentE;