import { useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Spinner, Container, Card } from "react-bootstrap";

const libraries = ["places"];

function GMap({
  coords = { lat: 11.0168, lng: 76.9558 }, 
  frameSize = { width: "80%", height: "70vh" },
}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
    language: "en-IN",
    region: "IN",
  });

  const handleMapLoad = useCallback((mapInstance) => {
    console.log("Map Loaded:", mapInstance);
  }, []);

  if (loadError) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="text-center p-4 shadow-lg border-danger">
          <h2 className="text-danger">Error Loading Maps</h2>
          <p>{loadError.message}</p>
        </Card>
      </Container>
    );
  }

  if (!isLoaded) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
        <p className="ms-3">Loading Google Maps...</p>
      </Container>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center py-4">
      <Card
        className="shadow-lg overflow-hidden"
        style={{ width: frameSize.width, height: frameSize.height }}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={coords}
          zoom={15}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: true,
            mapTypeId: "roadmap",
          }}
          onLoad={handleMapLoad}
        >
          <Marker position={coords} />
        </GoogleMap>
      </Card>
    </Container>
  );
}

export default GMap;