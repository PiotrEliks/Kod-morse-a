import React, { useState } from 'react'
import styles from './Coder.module.css'
import { saveAs } from 'file-saver';
import { TbXboxX } from "react-icons/tb";

const Form = ({ setType }) => {
    const [message, setMessage] = useState('');
    const morseCode = {
        "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", 
        "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
        "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
        "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
        "Y": "-.--", "Z": "--..",
        "Ą": ".-.-", "Ć": "-.-..", "Ę": "..-..", "Ł": ".-..-", "Ń": "--.--", 
        "Ó": "---.", "Ś": "...-...", "Ż": "--..-.", "Ź": "--..-",
        "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
        "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
        ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", ":": "---...",
        ";": "-.-.-.", "'": ".----.", "\"": ".-..-.", "-": "-....-", "/": "-..-.",
        "(": "-.--.", ")": "-.--.-", "&": ".-...", "=": "-...-", "+": ".-.-.",
        "_": "..--.-", "$": "...-..-", "@": ".--.-.",
        " ": "|"
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const convertToMorse = (message) => {
        return message.toUpperCase().split("").map(char => morseCode[char] || "".join(" "));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const morseMessage = convertToMorse(message);

        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?><MorseMessages xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="morse_message.xsd"><Message>${morseMessage.toString().replaceAll(',', ' ')}</Message></MorseMessages>`;

        const xml = new Blob([xmlContent],  {type: 'application/xml' });

        const xsdContent = '<?xml version="1.0" encoding="UTF-8"?><xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"><xs:element name="MorseMessages"><xs:complexType><xs:sequence><xs:element name="Message" type="xs:string" maxOccurs="unbounded"/></xs:sequence></xs:complexType></xs:element></xs:schema>';

        const xsd = new Blob([xsdContent], {type: 'application/xsd'});
        saveAs(xml, 'morse_message.xml');
        saveAs(xsd, 'morse_message.xsd');
    };

  return (
    <div className={styles.form}>
        <button onClick={() => setType('default')} className={styles.closeBtn}><TbXboxX className={styles.closeIcon}/></button>
        <form onSubmit={handleSubmit}>
            <label className={styles.label}>Wpisz wiadomość</label>
            <textarea value={message} onChange={handleMessageChange} className={styles.message}/>
            <button type="submit" className={styles.submitBtn}>Zakoduj</button>
        </form>
    </div>
  )
}

export default Form
