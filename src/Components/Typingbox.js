import React, { useState } from "react";
import refreshicon from "../Images/refresh.png"

const Typingbox = () => {
  const [time, settime] = useState(15);
  let displaytext ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus leo, faucibus laoreet bibendum pellentesque, hendrerit id erat. In hac habitasse platea dictumst. Etiam purus orci, volutpat eu tincidunt consectetur, pellentesque at lectus. Aliquam gravida lacus velit, a mattis sem placerat eget. Vestibulum pretium ac felis nec sagittis. Cras eget mollis metus, eu rutrum lorem. Nullam vel massa ac quam fermentum facilisis vitae vitae mauris. Proin varius libero at leo finibus, sit amet mattis lorem vulputate Etiam gravida lorem in nibh posuere feugiat. Nunc sed euismod mi. Praesent ut molestie odio. Ut mollis ullamcorper lacus in ultrices. In ac dolor metus. Aliquam vestibulum ipsum at felis mollis semper. Praesent pulvinar turpis in justo dignissim, et fringilla magna elementum. Maecenas libero ligula, sodales non ex ac, egestas ultricies diam. Sed ac blandit arcu, et tempus sapien. Mauris libero lectus, laoreet sit amet leo eget, posuere porta ante. In lobortis nisi eu odio elementum feugia Proin sed elementum justo. Integer consequat elit commodo, egestas ante id, tincidunt magna. Nullam ante ligula, auctor quis magna ac, euismod sodales eros. Vivamus quis nisi vitae risus facilisis tristique ac eget nisi. Maecenas rutrum sapien dolor, maximus tempus sapien gravida a. Integer vehicula nibh pulvinar metus";
  let keychar = 0;
  return (
    <div>
      <div className="row">
        <div>{time}</div>
        <div>
          <button onClick={() => settime(15)}>15s</button>
          <button onClick={() => settime(30)}>30s</button>
          <button onClick={() => settime(60)}>60s</button>
        </div>
      </div>
      <div className="text-box">
        {displaytext.split("").map((char, index) =>(<span key={"char" + (keychar++)}>{char}</span>))}
      </div>

      <div className="btn-container">
        <button className="refresh"><img src={refreshicon} alt="refreshicon"/></button>
        
        <div className="reset">
          <button>Esc</button>
          <span>-</span>
          <span>reset</span>
        </div>

        <div className="bttns">
          <button className="button">10</button>
          <button className="button">50</button>
          <button className="button">80</button>
          <button className="button">100</button>
          <span>-</span>
          <span>no. of words</span>
        </div>
      </div>
    </div>
  );
};

export default Typingbox;
