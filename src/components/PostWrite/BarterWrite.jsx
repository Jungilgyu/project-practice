// 게시글(판매) 생성 페이지
import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 500px;
	margin: auto;
	padding: 20px;
`;

const Label = styled.label`
	margin-bottom: 10px;
`;

const BarterWrite = () => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState(null); // 이미지는 파일을 업로드하는 거니까? 
	const [content, setContent] = useState('');



	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	}

	const handleImageChange = (event) => {
		const file = event.target.files[0]; // 근데 여기서 [ ] 안에 숫자는 최대 몇장 업로드할건지에 따라 바뀔 듯?
		setImage(file);
	}

	const handleContentChange = (event) => {
		setContent(event.target.value);
	}

	const handleButtonClick = () => {
		console.log('게시물 생성');
		// 여기다가 navigate? 추가해서 버튼 누르면 전체 게시글 페이지로 이동하게 끔 하면 될 듯 
		
	}

	return (
		<Container>
			<Label>제목: </Label>
			<TextField
        fullWidth
        value={title}
        onChange={handleTitleChange}
        variant="outlined"
        margin="normal"
      />

			<Label>이미지업로드: </Label>
			<input type='file' accept='image/*' onChange={handleImageChange} />

			{/* 가진거, 교환 원하는 거 여기다가 추가해야함*/}

			<Label>상세 게시글: </Label>
			<TextareaAutosize
        value={content}
        onChange={handleContentChange}
        rowsMin={4}
        placeholder="상세 게시글을 입력하세요."
      />

			<Button variant="contained" color="primary" onClick={handleButtonClick}>
        1:1채팅하기
      </Button>
		</Container>
		
	)
}

export default BarterWrite;