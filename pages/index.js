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
  const router = useRouter();
  const { university, semester, branch, subject } = router.query;

  const [htmlContent, setHtmlContent] = useState('');
  const [selectedPaper, setSelectedPaper] = useState('');
  const [showPaperList, setShowPaperList] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const universities = ['Nagpur', 'Pune', 'Mumbai'];
  const semesters = {
    Nagpur: ['1st', '2nd', '3rd', '4th', '5th'],
    Pune: ['1st', '2nd', '3rd', '4th', '5th'],
    Mumbai: ['1st', '2nd', '3rd', '4th', '5th'],
  };
  const branches = {
    Nagpur: ['Mechanical', 'Civil'],
  };

  const subjects = {
    Nagpur: {
      '1st': {
        Mechanical: ['Subject1', 'Subject2', 'Subject3'],
      },
      '2nd': {
        Civil: ['Subject4', 'Subject5', 'Subject6'],
      },
      // Define subjects for other semesters
    },
    Pune: {
      // Define subjects for Pune
    },
    Mumbai: {
      // Define subjects for Mumbai
    },
  };

  const lists = {
    Nagpur: {
      '1st': {
        'Mechanical': {
          'Subject1': ['question', 'winter-2019'],
          'Subject2': [],
          'Subject3': [],
        },
        // Define papers for other subjects and semesters
      },
    },
    Pune: {
      // Define papers for Pune
    },
    Mumbai: {
      // Define papers for Mumbai
    },
  };

  const fetchHtmlContent = async (paperName) => {
    try {
      if (paperName) {
        const key = `universities/${university}/${semester}/${branch}/${subject}/${paperName}.html`;
        const params = {
          Bucket: 'demonext', // Replace with your S3 bucket name
          Key: key,
        };

        const response = await s3.getObject(params).promise();
        const content = response.Body.toString();
        setHtmlContent(content);
      } else {
        // Handle the case where no paper is selected
      }
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  };

  const handleViewQuestionPapers = () => {
    if (university && semester && branch && subject) {
      setShowPaperList(true);
      setSelectedPaper('');
      setHtmlContent('');
      setSelectedList(lists[university][semester][branch][subject]);
    }
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
          <select
            className='select-box'
            value={university || ''}
            onChange={(e) => router.push(`/?university=${e.target.value}`)}
          >
            <option value="">Select University</option>
            {universities.map((uni) => (
              <option key={uni} value={uni}>
                {uni}
              </option>
            ))}
          </select>
        </div>
        <br/>

        <div className='select-tag-1'>
          <select
            className='select-box'
            value={branch || ''}
            onChange={(e) => router.push(`/?university=${university}&branch=${e.target.value}`)}
          >
            <option value="">Select Branch</option>
            {branches[university] &&
              branches[university].map((bra) => (
                <option key={bra} value={bra}>
                  {bra}
                </option>
              ))}
          </select>
          <select
            className='select-box'
            value={semester || ''}
            onChange={(e) => router.push(`/?university=${university}&branch=${branch}&semester=${e.target.value}`)}
          >
            <option value="">Select Semester</option>
            {semesters[university] &&
              semesters[university].map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
          </select>
          <select
            className='select-box'
            value={subject || ''}
            onChange={(e) =>
              router.push(`/?university=${university}&branch=${branch}&semester=${semester}&subject=${e.target.value}`)
            }
          >
            <option value="">Select Subject</option>
            {subjects[university]?.[semester]?.[branch] &&
              subjects[university][semester][branch].map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
          </select>
        </div>
        <br/>
        <br/>
        <div className='button-container'>
          <button className='view-button' onClick={handleViewQuestionPapers}>
            Find Papers
          </button>
        </div>
        <button>
        </button>
        <br/>
        {showPaperList && (
  <div className='paper-list'>
    <ul className='a'>
      {selectedList.map((li) => (
        <li
          key={li}
          onClick={() => {
            setSelectedPaper(li);
            // Construct the URL with query parameters
            const url = `/renderpage?fileName=${li}&university=${university}&semester=${semester}&branch=${branch}&subject=${subject}`;
            // Open the URL in a new tab
            window.open(url, '_blank');
          }}
          style={{ cursor: 'pointer' }}
        >
          {li}
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
