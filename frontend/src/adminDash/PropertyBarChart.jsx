import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, Spinner, Row, Col, Container } from "react-bootstrap";

const PropertyBarChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("http://localhost:7000/property-status-count")
      .then((response) => {
        setData(response.data); // Use API response directly
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        {loading ? (
          <div className="text-center w-100">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          data.map((locationData, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="p-4 shadow-lg">
                <h5 className="text-center text-primary">{locationData.location}</h5>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[locationData]}>
                    <XAxis dataKey="location" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Ready to Move" fill="#28a745" /> {/* Green */}
                    <Bar dataKey="Under Construction" fill="#ffc107" /> {/* Yellow */}
                    <Bar dataKey="Occupied" fill="#dc3545" /> {/* Red */}
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default PropertyBarChart
