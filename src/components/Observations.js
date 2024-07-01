import React from 'react';
import styled from '@emotion/styled';
import DocCard from './DocCard';

const ObservationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  padding-top: 95px;
`;

const exampleContent = `
  هذا هو نص محتوى المستند. يمكنك إضافة محتوى طويل هنا
  لرؤية كيفية ظهور المعاينة داخل البطاقة.
  يمكن أن يكون هذا النص مثالياً لوصف المستند.
`;

const docs = [
  {
    title: 'مستند 1',
    date: '2023-01-01',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/1',
  },
  {
    title: 'مستند 2',
    date: '2023-02-15',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/2',
  },
  {
    title: 'مستند 3',
    date: '2023-03-30',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/3',
  },
  {
    title: 'مستند 4',
    date: '2023-04-20',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/4',
  },
  {
    title: 'مستند 5',
    date: '2023-05-10',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/5',
  },
  {
    title: 'مستند 6',
    date: '2023-06-01',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/6',
  },
  {
    title: 'مستند 7',
    date: '2023-07-12',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/7',
  },
  {
    title: 'مستند 8',
    date: '2023-08-23',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/8',
  },
  {
    title: 'مستند 9',
    date: '2023-09-30',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/9',
  },
  {
    title: 'مستند 10',
    date: '2023-10-10',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/10',
  },
  {
    title: 'مستند 11',
    date: '2023-11-01',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/11',
  },
  {
    title: 'مستند 12',
    date: '2023-12-15',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/12',
  },
  {
    title: 'مستند 13',
    date: '2024-01-01',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/13',
  },
  {
    title: 'مستند 14',
    date: '2024-02-15',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/14',
  },
  {
    title: 'مستند 15',
    date: '2024-03-30',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/15',
  },
  {
    title: 'مستند 16',
    date: '2024-04-20',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/16',
  },
  {
    title: 'مستند 17',
    date: '2024-05-10',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/17',
  },
  {
    title: 'مستند 18',
    date: '2024-06-01',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/18',
  },
  {
    title: 'مستند 19',
    date: '2024-07-12',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/19',
  },
  {
    title: 'مستند 20',
    date: '2024-08-23',
    content: exampleContent,
    link: 'https://docs.google.com/document/d/20',
  },
];

const Observations = () => {
  return (
    <ObservationsContainer>
      {docs.map((doc, index) => (
        <DocCard
          key={index}
          title={doc.title}
          date={doc.date}
          content={doc.content}
          link={doc.link}
          image={doc.image}
        />
      ))}
    </ObservationsContainer>
  );
};

export default Observations;
