import Geolocation from '@react-native-community/geolocation';
import {useState, useEffect} from 'react';
const useLocation = () => {
  const [location, setLocation] = useState({});

  const accessLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {longitude, latitude} = position.coords;
        setLocation({longitude, latitude});
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    accessLocation();
  }, []);

  return location;
};

export default useLocation;
