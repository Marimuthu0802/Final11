import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";

const ManageApartments = () => {
  const [formData, setFormData] = useState({
    apartmentName: "",
    price: "",
    location: "",
    BHK: "",
    projectStatus: "",
    propertyType: "",
    image: null,
  });

  const [apartments, setApartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    apartmentName: "",
    price: "",
    location: "",
    BHK: "",
    projectStatus: "",
    propertyType: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchApartments = async () => {
    try {
      const response = await axios.get("http://localhost:7000/view");
      setApartments(response.data);
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, [apartments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      await axios.post("http://localhost:7000/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Apartment added successfully!");
      setFormData({
        apartmentName: "",
        price: "",
        location: "",
        BHK: "",
        projectStatus: "",
        propertyType: "",
        image: null,
      });

      document.getElementById("imageInput").value = "";
      fetchApartments();
    } catch (error) {
      console.error("Error adding apartment:", error);
      alert("Failed to add apartment.");
    }
  };

  const handleEdit = (apartment) => {
    setSelectedApartment(apartment);
    setUpdatedData({
      apartmentName: apartment.apartmentName,
      price: apartment.price,
      location: apartment.location,
      BHK: apartment.BHK,
      projectStatus: apartment.projectStatus,
      propertyType: apartment.propertyType,
      image: null,
    });
    setShowModal(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleUpdateFileChange = (e) => {
    setUpdatedData({ ...updatedData, image: e.target.files[0] });
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    console.log("handle update");

    try {
      const data = new FormData();

      // Explicitly append each field
      data.append("apartmentName", updatedData.apartmentName);
      data.append("price", updatedData.price);
      data.append("location", updatedData.location);
      data.append("BHK", updatedData.BHK);
      data.append("projectStatus", updatedData.projectStatus);
      data.append("propertyType", updatedData.propertyType);

      // Only append image if a new one was selected
      if (updatedData.image instanceof File) {
        data.append("image", updatedData.image);
      }

      const res = await axios.put(
        `http://localhost:7000/apartments/${selectedApartment._id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      fetchApartments();
      alert("Apartment updated successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error updating apartment:", error);
      alert(
        `Failed to update apartment. Error: ${
          error.response?.data?.message || error.message
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this apartment?")) {
      try {
        await axios.delete(`http://localhost:7000/apartments/${id}`);
        alert("Apartment deleted successfully!");
        fetchApartments();
      } catch (error) {
        console.error("Error deleting apartment:", error);
        alert("Failed to delete apartment.");
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Manage Apartments</h2>

      {/* Add Apartment Form */}
      <Form onSubmit={handleSubmit} className="mb-5">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Apartment Name</Form.Label>
              <Form.Control
                type="text"
                name="apartmentName"
                value={formData.apartmentName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">Select Location</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Hyderabad">Hyderabad</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>BHK</Form.Label>
              <Form.Select
                name="BHK"
                value={formData.BHK}
                onChange={handleChange}
                required
              >
                <option value="">Select BHK</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Project Status</Form.Label>
              <Form.Select
                name="projectStatus"
                value={formData.projectStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select Project Status</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Occupied">Occupied</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Property Type</Form.Label>
              <Form.Select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
              >
                <option value="">Select Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Row House">Row House</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                id="imageInput"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Add Apartment
        </Button>
      </Form>

      {/* Apartment Cards */}
      <Row>
        {apartments.map((apartment) => (
          <Col md={4} key={apartment._id} className="mb-4">
            <Card>
              {apartment.image && (
                <Card.Img
                  variant="top"
                  src={`http://localhost:7000/uploads/${apartment.image}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title>{apartment.apartmentName}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ₹{apartment.price} <br />
                  <strong>Location:</strong> {apartment.location} <br />
                  <strong>BHK:</strong> {apartment.BHK} <br />
                  <strong>Project Status:</strong> {apartment.projectStatus}{" "}
                  <br />
                  <strong>Property Type:</strong> {apartment.propertyType}
                </Card.Text>
                <Button variant="warning" onClick={() => handleEdit(apartment)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => handleDelete(apartment._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Apartment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Apartment Name</Form.Label>
              <Form.Control
                type="text"
                name="apartmentName"
                value={updatedData.apartmentName}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={updatedData.price}
                onChange={handleUpdateChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Select
                name="location"
                value={updatedData.location}
                onChange={handleUpdateChange}
                required
              >
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Hyderabad">Hyderabad</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>BHK</Form.Label>
              <Form.Select
                name="BHK"
                value={updatedData.BHK}
                onChange={handleUpdateChange}
                required
              >
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Project Status</Form.Label>
              <Form.Select
                name="projectStatus"
                value={updatedData.projectStatus}
                onChange={handleUpdateChange}
                required
              >
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Occupied">Occupied</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Property Type</Form.Label>
              <Form.Select
                name="propertyType"
                value={updatedData.propertyType}
                onChange={handleUpdateChange}
                required
              >
                <option value="Apartment">Apartment</option>
                <option value="Row House">Row House</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image (Leave empty to keep current image)</Form.Label>
              <Form.Control type="file" onChange={handleUpdateFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageApartments;