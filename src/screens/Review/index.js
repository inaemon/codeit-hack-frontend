import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Navbar from '../../component/NavBar'; // 네비게이션 바 컴포넌트 임포트
import Header from '../../component/Header';
import './styles.css';
import StarRating from './StarRating';

const mapContainerStyle = {
    height: '400px',
    width: '100%',
};

const center = {
    lat: 37.5665,
    lng: 126.978,
};

const Review = () => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [starScore, setStarScore] = useState(0);
    const [comment, setComment] = useState('');
    
    // 사용자 정보 상태 추가
    const [user, setUser] = useState({
        nickname: '사용자 닉네임',
        profilePic: 'URL_TO_PROFILE_PIC'
    });

    const handleMapClick = async (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        const placeInfo = await getPlaceInfo(lat, lng);
        if (placeInfo) {
            setSelectedPlace(placeInfo);
        } else {
            alert("장소 정보를 가져올 수 없습니다.");
        }
    };

    const getPlaceInfo = async (lat, lng) => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA1yuea2RvD3T6IHW4hENgTR69KmgfKZu0`);
        const data = await response.json();
        if (data.results.length > 0) {
            const placeName = data.results[0].formatted_address;
            return { lat, lng, name: placeName };
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedPlace && selectedPlace.name) {
            const newReview = { 
                placeName: selectedPlace.name,
                rating: starScore, 
                comment,
                userNickname: user.nickname,
                userProfilePic: user.profilePic
            };
            setReviews(prevReviews => [...prevReviews, newReview]);
            setStarScore(0);
            setComment('');
            setSelectedPlace(null);
        } else {
            alert("장소를 선택해주세요.");
        }
    };

    return (
        <div className='container'>  
                <Header/>
                <LoadScript googleMapsApiKey="AIzaSyA1yuea2RvD3T6IHW4hENgTR69KmgfKZu0">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={10}
                        onClick={handleMapClick}
                    >
                        {selectedPlace && <Marker position={selectedPlace} />}
                    </GoogleMap>
                </LoadScript>
                <div className="review-section">
                    <h2>리뷰 남기기</h2>
                    <form onSubmit={handleSubmit}>
                        <label>평점:</label>
                        <StarRating starScore={starScore} setStarScore={setStarScore} />
                        <label htmlFor="comment">리뷰:</label>
                        <textarea 
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required 
                        />
                        <button type="submit">제출</button>
                    </form>
                    <h3>이 장소의 리뷰</h3>
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>
                                <img src={review.userProfilePic} alt={`${review.userNickname}'s profile`} style={{ width: '30px', borderRadius: '50%' }} /><br />
                                <strong>닉네임: {review.userNickname}</strong><br />
                                장소: {review.placeName}<br />
                                평점: {review.rating}<br />
                                리뷰: {review.comment}
                            </li>
                        ))}
                    </ul>
                </div>
                <Navbar /> {/* 네비게이션 바 추가 */}
        </div>
    );
}

export default Review;






