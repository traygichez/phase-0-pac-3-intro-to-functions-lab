function shout(string) {
    return string;
}
"Hello!".toUpperCase(); // 'HELLO!'
function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string;
  }
  "Hello!".toLowerCase(); // 'HELLO!'
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        const reply = "I can't hear you!";
        return reply ;
  }
  if(string === string.toUpperCase()) {
    const reply = "YES INDEED!";
    return reply;
  }
   (string === "Let's have dinner together!")
     const reply = "I would love to!";
     return reply;
 }