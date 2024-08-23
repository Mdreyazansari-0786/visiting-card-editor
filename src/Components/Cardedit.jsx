import React, { useState } from 'react';
import Draggable from 'react-draggable';

const VisitingCardEditor = () => {
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
      <div style={{ display: 'flex', justifyContent: 'center', padding: '30px', gap:"40px", background:"black" }}>
      <div style={{ width: '300px', paddingRight: '20px', background: '#f8f9fa', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold', fontSize: '18px' }}>Customize Your Card</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Your Name</label>
          <input
            type="text"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Upload Logo</label>
          <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ padding: '5px' }} />
        </div>
        <button onClick={handleAddField} style={{ marginTop: '20px', padding: '10px 15px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.3s ease' }}>
          Add Custom Field
        </button>
      </div>

      <div
        style={{
          width: '600px',
          height: '350px',
          backgroundImage: `url(https://marketplace.canva.com/EAFcDwpYiy4/1/0/1600w/canva-navy-and-brown-modern-business-card-ObREsAyFYK4.jpg)`,
          backgroundSize: 'cover',
          position: 'relative',
          border: '1px solid #ccc',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        }}
      >
        <Draggable position={positions.companyName} onDrag={(e, data) => handleDrag(e, data, 'companyName')}>
          <div
            style={{
              position: 'absolute',
              color: '#fff',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'move',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
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
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
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
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {position}
          </div>
        </Draggable>
        <Draggable position={positions.email} onDrag={(e, data) => handleDrag(e, data, 'email')}>
          <div
            style={{
              position: 'absolute',
              color: '#666',
              fontSize: '14px',
              cursor: 'move',
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {email}
          </div>
        </Draggable>
        <Draggable position={positions.phone} onDrag={(e, data) => handleDrag(e, data, 'phone')}>
          <div
            style={{
              position: 'absolute',
              color: '#666',
              fontSize: '14px',
              cursor: 'move',
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {phone}
          </div>
        </Draggable>
        <Draggable position={positions.website} onDrag={(e, data) => handleDrag(e, data, 'website')}>
          <div
            style={{
              position: 'absolute',
              color: '#666',
              fontSize: '14px',
              cursor: 'move',
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {website}
          </div>
        </Draggable>
        <Draggable position={positions.address} onDrag={(e, data) => handleDrag(e, data, 'address')}>
          <div
            style={{
              position: 'absolute',
              color: '#666',
              fontSize: '14px',
              cursor: 'move',
              textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {address}
          </div>
        </Draggable>
        {customFields.map((field, index) => (
          <Draggable key={index} position={field.position} onDrag={(e, data) => handleDrag(e, data, `custom-${field.id}`)}>
            <div
              style={{
                position: 'absolute',
                color: '#333',
                fontSize: '14px',
                cursor: 'move',
                textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)',
              }}
            >
              <input
                type="text"
                value={field.text}
                onChange={(e) => handleCustomFieldChange(field.id, e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
                  outline: 'none',
                  fontSize: '14px',
                }}
              />
            </div>
          </Draggable>
        ))}
        {logo && (
          <Draggable position={logoPosition} onDrag={(e, data) => setLogoPosition({ x: data.x, y: data.y })}>
            <img
              src={logo}
              alt="Logo"
              style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                cursor: 'move',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Draggable>
        )}
      </div>
    </div>
  );
};

export default VisitingCardEditor;
