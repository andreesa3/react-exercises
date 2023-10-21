import useCurrentLocation from "./useCurrentLocation";

const CurrentLocation = () => {
  const { data, loading, error, getLocation } = useCurrentLocation();

  return (
    <div className="p-4">
      {loading && <h2 className="text-xl">Loading...</h2>}
      {error && <p>Utente non trovato</p>}
      {
        (data.latitude > 0 && data.longitude > 0) ? (
          <>
            <p>Latitudine: {data.latitude}</p>
            <p>Longitudine: {data.longitude}</p>
          </>
        ) : (
          <button onClick={getLocation} className="border border-black px-3 py-1 mt-3">Posizione</button>
        )
      }
    </div>
  )
}

export default CurrentLocation; 