import React, { useState } from 'react';
import styles from './results.module.css';

const studentsData = [
  {
    id: 'STU001',
    name: 'Mohamed El Amin',
    grammar: 88,
    spelling: 90,
    total: 178,
    status: 'Pass',
  },
  {
    id: 'STU002',
    name: 'Fatima Mint Ahmed',
    grammar: 72,
    spelling: 65,
    total: 137,
    status: 'Pass',
  },
  {
    id: 'STU003',
    name: 'Ali Ould Sidi',
    grammar: 40,
    spelling: 45,
    total: 85,
    status: 'Fail',
  },
  {
    id: 'STU004',
    name: 'Aicha Bint Mohamed',
    grammar: 95,
    spelling: 92,
    total: 187,
    status: 'Pass',
  },
  {
    id: 'STU005',
    name: 'Omar Ibn Khattab',
    grammar: 38,
    spelling: 42,
    total: 80,
    status: 'Fail',
  },
];

const StudentResults = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.resultsWrapper}>
      <div className={styles.header}>
        <h1 className={styles.sectionTitle}>Student Results</h1>
      </div>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.tableContainer}>
        {filteredStudents.length > 0 ? (
          <table className={styles.resultsTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Grammar</th>
                <th>Spelling</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.grammar}</td>
                  <td>{student.spelling}</td>
                  <td>{student.total}</td>
                  <td className={`${styles.status} ${student.status === 'Pass' ? styles.pass : styles.fail}`}>
                    {student.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.noResults}>No matching students found.</p>
        )}
      </div>
    </section>
  );
};

export default StudentResults;