import React, { useState } from 'react';
import { AddButton, Container, ModalWrapper, ModalContent, CloseButton, SubmitButton, TripList, TripItem } from './styles';
import Navbar from '../../component/NavBar';
import Header from '../../component/Header';

const Home = () => {
    const [trips, setTrips] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTrip, setNewTrip] = useState({ title: '', startDate: '', endDate: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTrip({ ...newTrip, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTrips([...trips, newTrip]);
        setNewTrip({ title: '', startDate: '', endDate: '' });
        setIsModalOpen(false);
    };

    return (
        <Container>
            <Header />
            <AddButton onClick={() => setIsModalOpen(true)}>+  여행 일정 만들기</AddButton>
            {isModalOpen && (
                <ModalWrapper>
                    <ModalContent onSubmit={handleSubmit}>
                        <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
                        <input
                            type="text"
                            name="title"
                            value={newTrip.title}
                            onChange={handleInputChange}
                            required
                            placeholder='여행 제목'
                        />
                        <label>날짜</label>
                        <input
                            type="date"
                            name="startDate"
                            value={newTrip.startDate}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="date"
                            name="endDate"
                            value={newTrip.endDate}
                            onChange={handleInputChange}
                            required
                        />
                        <SubmitButton type="submit">만들기</SubmitButton>
                    </ModalContent>
                </ModalWrapper>
            )}

            <TripList>
                <h2>내 여행</h2>
                {trips.map((trip, index) => (
                    <TripItem key={index}>
                        <h3 className='title'>{trip.title}</h3>
                        <span className='date'>{trip.startDate} - {trip.endDate}</span>
                    </TripItem>
                ))}
            </TripList>
            <Navbar/>
        </Container>
    );
};

export default Home;