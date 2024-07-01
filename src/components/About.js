import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import Signature from './Signature';
import Section from './Section';
import { FaBook, FaInfoCircle, FaRegBuilding, FaUser, FaUsers } from 'react-icons/fa';
import ScrollArrow from './ScrollArrow';
import myImg from '../../imgs/me.jpg';

const sections = [
  {
    id: 'whoami-section',
    icon: <FaUser size={30} />,
    title: 'من أنا',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الشاملة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
    links: [
      { href: 'https://example.com/section1', title: 'انقر هنا للدرس 1' },
      { href: 'https://example.com/section1', title: 'انقر هنا للدرس 2' },
    ],
  },
  {
    id: 'id2',
    icon: <FaBook size={30} />,
    title: 'التعليم',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
    links: [
      { href: 'https://example.com/section2', title: 'انقر هنا للدرس 1' },
      { href: 'https://example.com/section2', title: 'انقر هنا للدرس 2' },
    ],
  },
  {
    id: 'id3',
    icon: <FaRegBuilding size={30} />,
    title: 'الخبرة',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
    links: [
      { href: 'https://example.com/section3', title: 'انقر هنا للدرس 1' },
      { href: 'https://example.com/section3', title: 'انقر هنا للدرس 2' },
    ],
  },
  {
    id: 'id4',
    icon: <FaUsers size={30} />,
    title: 'المجتمع',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
    links: [
      { href: 'https://example.com/section4', title: 'انقر هنا للدرس 1' },
      { href: 'https://example.com/section4', title: 'انقر هنا للدرس 2' },
    ],
  },
  {
    id: 'id5',
    icon: <FaInfoCircle size={30} />,
    title: 'المعلومات الإضافية',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
    links: [
      { href: 'https://example.com/section5', title: 'انقر هنا للدرس 1' },
      { href: 'https://example.com/section5', title: 'انقر هنا للدرس 2' },
    ],
  },
];

const About = () => {
  return (
    <div>
      <LayoutWithImage photoUrls={[myImg]} text={sections[0].text} signature={<Signature />} />
      <ScrollArrow targetId="whoami-section" />
      {sections.map((section, index) => (
        <Section
          id={section.id}
          key={index}
          icon={section.icon}
          title={section.title}
          date={section.date}
          text={section.text}
          links={section.links}
        />
      ))}
    </div>
  );
};

export default About;
