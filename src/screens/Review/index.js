import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Navbar from '../../component/NavBar'; // 네비게이션 바 컴포넌트 임포트
import Header from '../../component/Header';
import StarRating from './StarRating';
import './styles.css';

const mapContainerStyle = {
    height: '400px',
    width: '100%',
};

const center = {
    lat: 37.5665,
    lng: 126.978,
};

function App() {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [starScore, setStarScore] = useState(0);
    const [comment, setComment] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); // 검색 쿼리 상태 추가
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
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`);
        const data = await response.json();
        if (data.results.length > 0) {
            const placeName = data.results[0].formatted_address;
            const placeId = data.results[0].place_id; // 구글 장소 ID 추가
            return { lat, lng, name: placeName, placeId }; // 장소 ID 포함
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

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`);
        const data = await response.json();
        if (data.results.length > 0) {
            const placeInfo = {
                lat: data.results[0].geometry.location.lat,
                lng: data.results[0].geometry.location.lng,
                name: data.results[0].formatted_address,
                placeId: data.results[0].place_id
            };
            setSelectedPlace(placeInfo);
            // 지도 중심을 검색된 장소로 설정
            center.lat = placeInfo.lat;
            center.lng = placeInfo.lng;
        } else {
            alert("장소를 찾을 수 없습니다.");
        }
    };

    return (
        <>
            <Header/>
            <div className='container'>  
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={10}
                        onClick={handleMapClick}
                    >
                        {selectedPlace && <Marker position={selectedPlace} />}
                    </GoogleMap>
                </LoadScript>
                <div className="search-section">
                    <form onSubmit={handleSearch}>
                        <input 
                            className='searchInput'
                            type="text" 
                            placeholder="장소 검색"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            required
                        />
                        <button type="submit">검색</button>
                    </form>
                </div>
                <div className="review-section">
                    <h2>리뷰 남기기</h2>
                    <form onSubmit={handleSubmit}>
                        <label>평점:</label>
                        <StarRating starScore={starScore} setStarScore={setStarScore} />
                        <label htmlFor="comment">리뷰:</label>
                        <input
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required 
                        />
                        <div className='button_div'>
                            <button type="submit">등록</button>
                        </div>
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
            </div>
            <Navbar />
        </>
    );
}

export default App;






