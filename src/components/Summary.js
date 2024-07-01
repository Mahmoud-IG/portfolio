import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import Signature from './Signature';
import Section from './Section';
import {
  FaArrowAltCircleUp,
  FaRegComment,
  FaRegCommentDots,
  FaRegListAlt,
  FaRegMeh,
  FaRegSadTear,
  FaRegStar,
} from 'react-icons/fa';
import ScrollArrow from './ScrollArrow';

// Example photo URL (you can replace this with your own photo URL)
const photoUrl =
  'https://as2.ftcdn.net/v2/jpg/08/44/14/29/1000_F_844142963_7e1OqB0RMAgnfJAxp8fUsgiJwEpBQmh1.jpg';

// Example text for each section
const sections = [
  {
    id: 'feel-section',
    icon: <FaRegMeh size={30} />,
    title: 'أشعر ب',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الشاملة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
  {
    id: 'id2',
    icon: <FaRegSadTear size={30} />,
    title: 'نقاط ضعف',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
  {
    id: 'id3',
    icon: <FaRegStar size={30} />,
    title: 'نقاط قوة',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
  {
    id: 'id4',
    icon: <FaRegListAlt size={30} />,
    title: 'أشياء أود فعلها',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
  {
    id: 'id5',
    icon: <FaArrowAltCircleUp size={30} />,
    title: 'أشياء أود تحسينها',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
  {
    id: 'id6',
    icon: <FaRegCommentDots size={30} />,
    title: 'ملاحظات المعلم المدرب',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
  {
    id: 'id7',
    icon: <FaRegComment size={30} />,
    title: 'ملاحظات المرشد',
    text: `
      تجربة رائعة ومثمرة في التدريس بمدرسة الثانوية. عملت مع طاقم تعليمي متميز ومتفانٍ في تقديم أفضل تعليم للطلاب. رأيت تطوراً كبيراً في مهارات وقدرات الطلاب على مدار العام الدراسي. كانت البيئة التعليمية محفزة وداعمة، مما ساعد في تحقيق العديد من الإنجازات الأكاديمية.
    `,
  },
];

const Summary = () => {
  return (
    <div>
      <LayoutWithImage photoUrls={[photoUrl]} text={sections[0].text} signature={<Signature />} />
      <ScrollArrow targetId="feel-section" />
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

export default Summary;
