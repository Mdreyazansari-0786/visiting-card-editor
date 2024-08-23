import React, { useState } from 'react';
import Draggable from 'react-draggable';

const VisitingCardEditor = () => {
  // States to hold the input values
  const [companyName, setCompanyName] = useState('Company Name');
  const [yourName, setYourName] = useState('Your Name');
  const [position, setPosition] = useState('Your Position');
  const [email, setEmail] = useState('email@example.com');
  const [phone, setPhone] = useState('+00 123 456 789');
  const [website, setWebsite] = useState('website goes here');
  const [address, setAddress] = useState('address goes here, your city');
  const [customFields, setCustomFields] = useState([]);
  const [logo, setLogo] = useState(null);
  const [logoPosition, setLogoPosition] = useState({ x: 450, y: 50 });

  // Positions for draggable text elements
  const [positions, setPositions] = useState({
    companyName: { x: 120, y: 50 },
    yourName: { x: 40, y: 150 },
    position: { x: 40, y: 180 },
    phone: { x: 320, y: 150 },
    email: { x: 320, y: 180 },
    website: { x: 320, y: 210 },
    address: { x: 320, y: 240 },
  });

  const handleDrag = (e, data, field) => {
    setPositions({
      ...positions,
      [field]: { x: data.x, y: data.y },
    });
  };

  const handleAddField = () => {
    const newField = {
      id: customFields.length,
      text: 'Custom Field',
      position: { x: 50, y: 300 },
    };
    setCustomFields([...customFields, newField]);
  };

  const handleCustomFieldChange = (id, newText) => {
    setCustomFields(
      customFields.map(field => (field.id === id ? { ...field, text: newText } : field))
    );
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {/* Left Side Input Panel */}
      <div style={{ width: '300px', paddingRight: '20px', background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>Customize Your Card</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Your Name</label>
          <input
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Upload Logo</label>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </div>
        <button onClick={handleAddField} style={{ marginTop: '20px', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Custom Field
        </button>
      </div>

      {/* Image Background and Editor */}
      <div
        style={{
          width: '600px',
          height: '350px',
          backgroundImage: `url(https://marketplace.canva.com/EAFcDwpYiy4/1/0/1600w/canva-navy-and-brown-modern-business-card-ObREsAyFYK4.jpg)`,
          backgroundSize: 'cover',
          position: 'relative',
          border: '1px solid #ccc',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      >
        {/* Draggable Text Elements */}
        <Draggable position={positions.companyName} onDrag={(e, data) => handleDrag(e, data, 'companyName')}>
          <div
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'move',
            }}
          >
            {companyName}
          </div>
        </Draggable>
        <Draggable position={positions.yourName} onDrag={(e, data) => handleDrag(e, data, 'yourName')}>
          <div
            style={{
              position: 'absolute',
              color: '#333',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'move',
            }}
          >
            {yourName}
          </div>
        </Draggable>
        <Draggable position={positions.position} onDrag={(e, data) => handleDrag(e, data, 'position')}>
          <div
            style={{
              position: 'absolute',
              color: '#666',
              fontSize: '16px',
              cursor: 'move',
            }}
          >
            {position}
          </div>
        </Draggable>
        <Draggable position={positions.phone} onDrag={(e, data) => handleDrag(e, data, 'phone')}>
          <div
            style={{
              position: 'absolute',
              color: '#333',
              fontSize: '14px',
              cursor: 'move',
            }}
          >
            {phone}
          </div>
        </Draggable>
        <Draggable position={positions.email} onDrag={(e, data) => handleDrag(e, data, 'email')}>
          <div
            style={{
              position: 'absolute',
              color: '#333',
              fontSize: '14px',
              cursor: 'move',
            }}
          >
            {email}
          </div>
        </Draggable>
        <Draggable position={positions.website} onDrag={(e, data) => handleDrag(e, data, 'website')}>
          <div
            style={{
              position: 'absolute',
              color: '#333',
              fontSize: '14px',
              cursor: 'move',
            }}
          >
            {website}
          </div>
        </Draggable>
        <Draggable position={positions.address} onDrag={(e, data) => handleDrag(e, data, 'address')}>
          <div
            style={{
              position: 'absolute',
              color: '#333',
              fontSize: '14px',
              cursor: 'move',
            }}
          >
            {address}
          </div>
        </Draggable>

        {/* Draggable Logo */}
        {logo && (
          <Draggable position={logoPosition} onDrag={(e, data) => setLogoPosition({ x: data.x, y: data.y })}>
            <img
              src={logo}
              alt="Logo"
              style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                cursor: 'move',
              }}
            />
          </Draggable>
        )}

        {/* Custom Fields */}
        {customFields.map((field) => (
          <Draggable
            key={field.id}
            position={field.position}
            onDrag={(e, data) => {
              setCustomFields(customFields.map(f => (f.id === field.id ? { ...f, position: { x: data.x, y: data.y } } : f)));
            }}
          >
            <div
              style={{
                position: 'absolute',
                color: '#333',
                fontSize: '14px',
                cursor: 'move',
              }}
            >
              <input
                type="text"
                value={field.text}
                onChange={(e) => handleCustomFieldChange(field.id, e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#333' }}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default VisitingCardEditor;
