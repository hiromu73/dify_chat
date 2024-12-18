import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Textfield = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '20px', border: '1px solid #ccc', overflow: 'hidden' }}>
      <TextField
        sx={{
          "& .MuiInputBase-input": { height: 10 },
          flexGrow: 1, // TextFieldが利用可能なスペースを埋める
        }}
        placeholder="質問を入力して下さい"
        multiline
        fullWidth
        variant="outlined"
      />
      <IconButton
        onClick={() => {
          // ここに送信時の処理を追加
          console.log('送信されました');
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  )
}

export default Textfield
