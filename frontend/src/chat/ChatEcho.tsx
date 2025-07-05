import React, { useState } from 'react';
import './chat.styles.css';

interface ChatEchoProps {
    apiEndpoint?: string;
}

const ChatEcho: React.FC<ChatEchoProps> = ({ apiEndpoint = '/api/chat-echo/get-message' }) => {
    const [question, setQuestion] = useState('');
    const [output, setOutput] = useState<{ role: string, content: string }[]>([]);
    const [currentContext, setCurrentContext] = useState<{ role: string, content: string }[]>([]);

    const sendMessage = async () => {
        const data = {
            message: question,
            context: currentContext
        };

        setOutput([...output, { role: 'user', content: question }]);
        setQuestion('');

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const result = await response.json();
            setOutput([...output, { role: 'user', content: question }, { role: 'assistant', content: result.resp }]);
            setCurrentContext([...currentContext, { role: 'user', content: question }, { role: 'assistant', content: result.resp }]);
        } catch (error) {
            console.error('Error:', error);
            setOutput([...output, { role: 'user', content: question }, { role: 'assistant', content: 'Sorry, there was an error. Please refresh and try again.' }]);
        }
    };

    return (
        <div id="content">
            <div id="chat-output" className="output">
                {output.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="entry-form">
                <form id="chat-form" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                    <input
                        type="text"
                        name="question"
                        id="question"
                        placeholder="Enter your question? 📝👋IM CHAT ECHO🙋‍♂️"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                    <input type="button" value="Send" id="chat-send" onClick={sendMessage}/>
                </form>
            </div>
        </div>
    );
};

export default ChatEcho;