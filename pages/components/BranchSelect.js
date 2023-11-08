// BranchSelect.js
import React, { useState, useEffect } from 'react';
import s3 from '../awsConfig';

function BranchSelect({ university, onSelectBranch }) {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');

  useEffect(() => {
    async function fetchBranches() {
      try {
        const params = {
          Bucket: 'demonext',
          Delimiter: '/',
          Prefix: `universities/${university}/`,
        };
        const data = await s3.listObjectsV2(params).promise();

        // Extract the branch names (Firstyear engineering, Mechanical Engineering)
        const branchNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[2]);

        setBranches(branchNames);
      } catch (error) {
        console.error('Error fetching branches from S3', error);
      }
    }

    fetchBranches();
  }, [university]);

  useEffect(() => {
    onSelectBranch(selectedBranch);
  }, [selectedBranch, onSelectBranch]);

  return (
    <div>
      <select
        value={selectedBranch}
        onChange={e => setSelectedBranch(e.target.value)}
      >
        <option value="">Select Branch</option>
        {branches.map(branch => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BranchSelect;
