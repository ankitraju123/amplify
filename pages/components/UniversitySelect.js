// UniversitySelect.js
import React, { useState, useEffect } from 'react';
import s3 from '../awsConfig';

function UniversitySelect({ onSelectUniversity }) {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('');

  useEffect(() => {
    async function fetchUniversities() {
      try {
        const params = {
          Bucket: 'demonext',
          Delimiter: '/',
          Prefix: 'universities/',
        };
        const data = await s3.listObjectsV2(params).promise();

        // Extract the top-level directories (Nagpur, Pune, Mumbai)
        const universityNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[1]);

        setUniversities(universityNames);
      } catch (error) {
        console.error('Error fetching universities from S3', error);
      }
    }

    fetchUniversities();
  }, []);

  useEffect(() => {
    onSelectUniversity(selectedUniversity);
  }, [selectedUniversity, onSelectUniversity]);

  return (
    <div>
      <select
        value={selectedUniversity}
        onChange={e => setSelectedUniversity(e.target.value)}
      >
        <option value="">Select University</option>
        {universities.map(university => (
          <option key={university} value={university}>
            {university}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UniversitySelect;
