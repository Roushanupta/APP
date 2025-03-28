import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

const App = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleChat = async () => {
        try {
            const res = await axios.post("http://localhost:8000/chat/", { message });
            setResponse(res.data.response);
        } catch (error) {
            setResponse("Error: Unable to fetch response.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: 20, marginTop: 30 }}>
                <Typography variant="h5" gutterBottom>💡 Startup GPT</Typography>
                <TextField
                    label="Ask a fundraising question..."
                    variant="outlined"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ marginBottom: 10 }}
                />
                <Button variant="contained" color="primary" onClick={handleChat}>
                    Get Advice
                </Button>
                {response && (
                    <Box mt={3}>
                        <Typography variant="h6">Response:</Typography>
                        <Typography>{response}</Typography>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};

export default App;
