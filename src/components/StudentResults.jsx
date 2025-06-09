import { useState } from 'react';
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
    <section className={styles.resultsSection}>
      <div className={styles.gradientBackground} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textInner}>
              <span className={styles.badge}>
                <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
                Student Results
              </span>

              <h2 className={styles.title}>
                <span className={styles.titleLine}>Check Your</span>
                <span className={`${styles.titleLine} ${styles.highlight}`}>Academic Progress</span>
              </h2>

              <p className={styles.description}>
                View your academic achievements and track your progress at English Basics Center. Search for your results using your name or student ID.
              </p>

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
                  <table>
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
                          <td data-label="ID">{student.id}</td>
                          <td data-label="Name">{student.name}</td>
                          <td data-label="Grammar">{student.grammar}</td>
                          <td data-label="Spelling">{student.spelling}</td>
                          <td data-label="Total">{student.total}</td>
                          <td data-label="Status">
                            <span className={`${styles.status} ${student.status === 'Pass' ? styles.pass : styles.fail}`}>
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className={styles.noResults}>No matching students found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentResults;