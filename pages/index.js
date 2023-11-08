import React, { useEffect, useState } from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import AWS from 'aws-sdk';
import { useRouter } from 'next/router';
import Link from 'next/link';

AWS.config.update({
  accessKeyId: 'AKIAW6NHOSIAG7OBVW5E',
  secretAccessKey: 'CpadDtG3Shsl0RyNt1ov1qSY42kRuKT9nwcCfK4I',
  region: 'ap-south-1', // Replace with your AWS region
});

const s3 = new AWS.S3();



const LatexPage = () => {
  <Head>
   <meta name="google-site-verification" content="FxqR1s2icYY6kU-AX-P380Ww8gSBV3XDqfTmpumkPAI" />
  </Head>
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [htmlFileList, setHtmlFileList] = useState([]);

  const [universities, setUniversities] = useState([]);
  const [branches, setBranches] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Fetch the universities
    async function fetchUniversities() {
      try {
        const params = {
          Bucket: 'demonext',
          Delimiter: '/',
          Prefix: 'universities/',
        };
        const data = await s3.listObjectsV2(params).promise();
        const universityNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[1]);
        setUniversities(universityNames);
      } catch (error) {
        console.error('Error fetching universities from S3', error);
      }
    }

    fetchUniversities();
  }, []);

  useEffect(() => {
    if (selectedUniversity) {
      // Fetch the branches based on the selected university
      async function fetchBranches() {
        try {
          const params = {
            Bucket: 'demonext',
            Delimiter: '/',
            Prefix: `universities/${selectedUniversity}/`,
          };
          const data = await s3.listObjectsV2(params).promise();
          const branchNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[2]);
          setBranches(branchNames);
        } catch (error) {
          console.error('Error fetching branches from S3', error);
        }
      }

      fetchBranches();
    }
  }, [selectedUniversity]);

  useEffect(() => {
    if (selectedBranch) {
      // Fetch the semesters based on the selected branch
      async function fetchSemesters() {
        try {
          const params = {
            Bucket: 'demonext',
            Delimiter: '/',
            Prefix: `universities/${selectedUniversity}/${selectedBranch}/`,
          };
          const data = await s3.listObjectsV2(params).promise();
          const semesterNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[3]);
          setSemesters(semesterNames);
        } catch (error) {
          console.error('Error fetching semesters from S3', error);
        }
      }

      fetchSemesters();
    }
  }, [selectedUniversity, selectedBranch]);

  useEffect(() => {
    if (selectedSemester) {
      // Fetch the subjects based on the selected semester
      async function fetchSubjects() {
        try {
          const params = {
            Bucket: 'demonext',
            Delimiter: '/',
            Prefix: `universities/${selectedUniversity}/${selectedBranch}/${selectedSemester}/`,
          };
          const data = await s3.listObjectsV2(params).promise();
          const subjectNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/')[4]);
          setSubjects(subjectNames);
        } catch (error) {
          console.error('Error fetching subjects from S3', error);
        }
      }

      fetchSubjects();
    }
  }, [selectedUniversity, selectedBranch, selectedSemester]);

  const fetchHtmlFiles = async () => {
    try {
      const params = {
        Bucket: 'demonext',
        Prefix: `universities/${selectedUniversity}/${selectedBranch}/${selectedSemester}/${selectedSubject}/`,
      };
      const data = await s3.listObjectsV2(params).promise();
      const htmlFiles = data.Contents
        .filter(obj => obj.Key.endsWith('.html'))
        .map(obj => obj.Key.split('/').pop());
      setHtmlFileList(htmlFiles);
    } catch (error) {
      console.error('Error fetching HTML files from S3', error);
    }
  };

  const handleHtmlFileClick = (htmlFile) => {
    // Use router.push to navigate to the render page with query parameters
    router.push({
      pathname: '/renderpage',
      query: {
        fileName: htmlFile,
        university: selectedUniversity,
        branch: selectedBranch,
        semester: selectedSemester,
        subject: selectedSubject,
      }});
  };

  return (
    <div className=''>
      <div className='bg-white h-screen '>
        <div className='flex bg-orange-500 text-center text-white font-semibold text-2xl justify-center align-middle h-12 gap-3 '>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdwL6kTceYWIEoA0FaL-gTO6C2I_5sV-Y-g&usqp=CAU' width="20" height="10"  />
          <div className=''>exam-papers.in</div>
        </div>
        <br/>
        <p className='text-2xl text-center'>Get Your Previous University Papers</p>
        <br/>
        <br/>
        <div className=''>
        <div className='select-tag-1'>
          <select
            className='select-box'
          >
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <select
            className='select-box'
          >
            <option value="">Select Stream</option>
            <option value="B.E/B.Tech">B.E/B.Tech</option>
          </select>
          <select className='select-box'
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
        <br/>

        <div className='select-tag-1'>
        <select className='select-box'
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
      <select className='select-box'
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
      <select className='select-box'
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
        </div>
   
        <br/>
        <br/>
        <div className='button-container'>
          <button className='view-button' onClick={fetchHtmlFiles}>
            Find Papers solution
          </button>
        </div>
        <button>
        </button>
        <br/>
        {htmlFileList.length > 0 && (
  <div className='paper-list'>
    <ul>
      {htmlFileList.map((htmlFile, index) => (
        <li
          key={index}
          onClick={() => {
            const url = `/renderpage?fileName=${htmlFile}&university=${selectedUniversity}&semester=${selectedSemester}&branch=${selectedBranch}&subject=${selectedSubject}`;
            // Open the URL in a new tab
            window.open(url, '_blank');
          }}
          style={{ cursor: 'pointer' }}
        >
          {/* <Link
            href={`/renderpage?fileName=${htmlFile}&university=${selectedUniversity}&semester=${selectedSemester}&branch=${selectedBranch}&subject=${selectedSubject}`}
          >
            <a>
              {htmlFile.replace('.html', '')}
            </a>
          </Link> */}
        </li>
      ))}
    </ul>
  </div>
)}

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="footer">
          <Link className="footer-1" href='./about'>About</Link>
          <Link className="footer-2" href='./privacy-policy'>Privacy Policy</Link>
          <Link className="footer-3" href='./refund-policy'>Refund Policy</Link>
          <Link className="footer-4" href='./terms-and-condition'>Terms and Condition</Link>
        </div>
      </div>
     

    </div>
  );
};

export default LatexPage;
