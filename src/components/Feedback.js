import React from 'react';
import Section from './Section';
import { FaBook, FaInfoCircle, FaRegBuilding, FaUser, FaUsers } from 'react-icons/fa';
import imgPlaceholder from '../../imgs/img-ph-150.png';

const sections = [
  {
    id: 'id1',
    icon: <FaUser size={30} />,
    title: 'من أنا',
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
  {
    id: 'id2',
    icon: <FaBook size={30} />,
    title: 'التعليم',
    date: '01.07.2024',
    text: `
        تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
      `,
    images: [
      { src: imgPlaceholder, alt: 'Sample Image 1' },
      { src: imgPlaceholder, alt: 'Sample Image 2' },
      { src: imgPlaceholder, alt: 'Sample Image 3' },
    ],
  },
  {
    id: 'id3',
    icon: <FaRegBuilding size={30} />,
    title: 'الخبرة',
    date: '01.07.2024',
    text: `
        تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
      `,
    images: [
      { src: imgPlaceholder, alt: 'Sample Image 1' },
      { src: imgPlaceholder, alt: 'Sample Image 2' },
      { src: imgPlaceholder, alt: 'Sample Image 3' },
      { src: imgPlaceholder, alt: 'Sample Image 4' },
      { src: imgPlaceholder, alt: 'Sample Image 5' },
    ],
  },
  {
    id: 'id4',
    icon: <FaUsers size={30} />,
    title: 'المجتمع',
    date: '01.07.2024',
    text: `
        تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
      `,
    images: [
      { src: imgPlaceholder, alt: 'Sample Image 1' },
      { src: imgPlaceholder, alt: 'Sample Image 2' },
      { src: imgPlaceholder, alt: 'Sample Image 3' },
      { src: imgPlaceholder, alt: 'Sample Image 4' },
    ],
  },
  {
    id: 'id5',
    icon: <FaInfoCircle size={30} />,
    title: 'المعلومات الإضافية',
    date: '01.07.2024',
    text: `
        تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
      `,
    images: [{ src: imgPlaceholder, alt: 'Sample Image 1' }],
  },
];

const Feedback = () => {
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

export default Feedback;
