// SubjectSelect.js
import React, { useState, useEffect } from 'react';
import s3 from '../awsConfig';

function SubjectSelect({ university, branch, semester, onSelectSubject }) {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const params = {
          Bucket: 'demonext',
          Delimiter: '/',
          Prefix: `universities/${university}/${branch}/${semester}/`,
        };
        const data = await s3.listObjectsV2(params).promise();

        // Extract the subject names (e.g., maths, physics)
        const subjectNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[4]);

        setSubjects(subjectNames);
      } catch (error) {
        console.error('Error fetching subjects from S3', error);
      }
    }

    fetchSubjects();
  }, [university, branch, semester]);

  useEffect(() => {
    onSelectSubject(selectedSubject);
  }, [selectedSubject, onSelectSubject]);

  return (
    <div>
      <select
        value={selectedSubject}
        onChange={e => setSelectedSubject(e.target.value)}
      >
        <option value="">Select Subject</option>
        {subjects.map(subject => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SubjectSelect;
