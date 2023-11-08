// SemesterSelect.js
import React, { useState, useEffect } from 'react';
import s3 from '../awsConfig';

function SemesterSelect({ university, branch, onSelectSemester }) {
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');

  useEffect(() => {
    async function fetchSemesters() {
      try {
        const params = {
          Bucket: 'demonext',
          Delimiter: '/',
          Prefix: `universities/${university}/${branch}/`,
        };
        const data = await s3.listObjectsV2(params).promise();

        // Extract the semester names (sem1, sem2, etc.)
        const semesterNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[3]);

        setSemesters(semesterNames);
      } catch (error) {
        console.error('Error fetching semesters from S3', error);
      }
    }

    fetchSemesters();
  }, [university, branch]);

  useEffect(() => {
    onSelectSemester(selectedSemester);
  }, [selectedSemester, onSelectSemester]);

  return (
    <div>
      <select
        value={selectedSemester}
        onChange={e => setSelectedSemester(e.target.value)}
      >
        <option value="">Select Semester</option>
        {semesters.map(semester => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SemesterSelect;
