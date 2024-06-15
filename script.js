// SpeechSynthesisUtterance is part of the Web Speech API in JavaScript, which allows you to add speech synthesis (text-to-speech) capabilities to your web applications. This interface represents a speech request and contains the content you want to be spoken as well as various parameters for controlling the speech.

let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
  // The line speech.text = document.querySelector("textarea").value; is a JavaScript statement used in the context of web development, specifically with the Web Speech API, to dynamically set the text that a speech synthesis (text-to-speech) engine will speak. Here’s a detailed breakdown of each part of this statement:

  speech.text = document.querySelector("textarea").value;

  // window: Refers to the global window object in the browser. This object represents an open window in a browser and serves as the global context for all JavaScript code running in that window.

  // speechSynthesis: This is a property of the window object. It provides access to the Web Speech API's speech synthesis functionality, which allows text-to-speech capabilities in the browser.

  //.speak: This is a method of the speechSynthesis object. It takes an instance of SpeechSynthesisUtterance as a parameter and queues it for speaking.

  //     Explanation of Event Listeners
  // speech.onstart: Fired when the utterance begins to be spoken.
  // speech.onend: Fired when the utterance has finished being spoken.
  // speech.onerror: Fired when there is an error during the speech synthesis process.
  window.speechSynthesis.speak(speech);
});

let voices = [];
let voiceSelect = document.querySelector("select")
window.speechSynthesis.onvoiceschanged =() => {
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0];

    voices.forEach((voices,i)=> (voiceSelect.options[i] = new Option(voices.name,i)))
}

voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value]
})
