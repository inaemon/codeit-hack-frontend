import React, { useState } from 'react';
import { AddButton, Container, ModalWrapper, ModalContent, CloseButton, SubmitButton, TravelList, TravelItem } from './styles';
import Navbar from '../../component/NavBar';
import Header from '../../component/Header';
import axios from 'axios';

const Home = () => {
    const [travels, settravels] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTravel, setNewTravel] = useState({ title: '', startDate: '', endDate: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTravel({ ...newTravel, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        settravels([...travels, newTravel]);
        setNewTravel({ title: '', startDate: '', endDate: '' });
        setIsModalOpen(false);
        
        const travelData = {
			title : '',
			start_date: '',
			end_date: '',
		};

		console.log(travelData);

		try {
			//setIsLoading(true);
			const response = await axios.post('http://localhost:5000/travels', travelData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status !== 201) {
				throw new Error('Failed');
			}

			const result = response.data;

			console.log(result);
		} catch (error) {
			console.error(error);
		} finally {
			//setIsLoading(false);
		}
    };

    return (
        <>
        <Header />
        <Container>
            
            <AddButton onClick={() => setIsModalOpen(true)}>+  여행 일정 만들기</AddButton>
            {isModalOpen && (
                <ModalWrapper>
                    <ModalContent onSubmit={handleSubmit}>
                        <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
                        <input
                            type="text"
                            name="title"
                            value={newTravel.title}
                            onChange={handleInputChange}
                            required
                            placeholder='여행 제목'
                        />
                        <label>날짜</label>
                        <input
                            type="date"
                            name="startDate"
                            value={newTravel.startDate}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="date"
                            name="endDate"
                            value={newTravel.endDate}
                            onChange={handleInputChange}
                            required
                        />
                        <SubmitButton type="submit">만들기</SubmitButton>
                    </ModalContent>
                </ModalWrapper>
            )}

            <TravelList>
                <h2>내 여행</h2>
                {travels.map((travel, index) => (
                    <TravelItem key={index}>
                        <h3 className='title'>{travel.title}</h3>
                        <span className='date'>{travel.startDate} - {travel.endDate}</span>
                    </TravelItem>
                ))}
            </TravelList>
            
        </Container>
        <Navbar/>
        </>
    );
};

export default Home;