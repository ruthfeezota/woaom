import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

 
const steps = [
    {
        id: '0',
        message: 'Hello!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};
 
// Set some properties of the bot
const config = {
    botAvatar: '../../Assets/img.png',
    floating: true,
};
 
function Chatbot() {
    return (
        <div style={{  lineHeight : 1,  }} >
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Woaom Bot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default Chatbot;