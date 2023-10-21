import { useState } from "react";

const useCurrentLocation = () => {
  const [data, setData] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true)
    if ("geolocation" in navigator) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      const handleSuccess = (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        setTimeout(() => {
          setData(d => {
            return {
              latitude: latitude,
              longitude: longitude
            }
          })
          setLoading(false)
        }, 800)
      }

      const handleError = (err) => {
        setError(err.message)
      }

      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options)
    } else {
      setError('Geolocalization disabled')
    }
  }

  return { data, error, loading, getLocation };
};

export default useCurrentLocation;
