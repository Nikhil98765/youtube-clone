import React, {useEffect, useState} from 'react';
import {ChatMessage} from "./ChatMessage";
import {addMessage} from "../store/chatSlice";
import {useDispatch, useSelector} from "react-redux";
import {generateName, generateRandomString} from "../utils/helper";
import SendIcon from '@mui/icons-material/Send';

const LiveChat = () => {

  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState('');
  const messages = useSelector(state => state.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
        dispatch(addMessage({
          name: generateName(),
          text: generateRandomString(20),
        }));
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[700px] p-2 border border-slate-300 rounded-xl bg-slate-100 overflow-auto flex flex-col-reverse">
        {
          messages.map((message, index) => <ChatMessage key={index} name={message.name} message={message.text} />)
        }
      </div>
      <form className=" w-full border border-slate-300 rounded-xl w-96" onSubmit={
        e => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Nikhil",
            text: liveMessage
          }));
        }
      }>
        <input className="w-[90%]" type="text" value={liveMessage} onChange={e => setLiveMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>

  );
};

export default LiveChat;
