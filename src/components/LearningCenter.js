import React from 'react';
import Section from './Section';
import { FaUniversity } from 'react-icons/fa';
import imgPlaceholder from '../../imgs/img-ph-150.png';

const sections = [
  {
    id: 'id1',
    icon: <FaUniversity size={30} />,
    title: 'الفعالية المركزية',
    date: '01.07.2024',
    text: `
        تجربة رائعة ومثمرة في التدريس بمدرسة الشاملة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
      `,
    images: [
      { src: imgPlaceholder, alt: 'Sample Image 1' },
      { src: imgPlaceholder, alt: 'Sample Image 2' },
      { src: imgPlaceholder, alt: 'Sample Image 3' },
      { src: imgPlaceholder, alt: 'Sample Image 4' },
    ],
  },
];

const LearningCenter = () => {
  return (
    <div style={{ paddingTop: 65 }}>
      {sections.map((section, index) => (
        <Section
          id={section.id}
          key={index}
          icon={section.icon}
          title={section.title}
          date={section.date}
          text={section.text}
          images={section.images}
        />
      ))}
    </div>
  );
};

export default LearningCenter;
