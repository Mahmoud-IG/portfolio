import React from "react";
import Section from "./Section";
import { FaUniversity } from "react-icons/fa";
import imgPlaceholder from "../../imgs/img-ph-150.png";
import { FaLock } from "react-icons/fa";
import imgmarkezTaalom1 from "../../imgs/markez-taalom/img1.jpg";
import imgmarkezTaalom2 from "../../imgs/markez-taalom/img2.jpg";
import imgmarkezTaalom3 from "../../imgs/markez-taalom/img3.jpg";
import imgmarkezTaalom4 from "../../imgs/markez-taalom/img4.jpg";
import imgmarkezTaalom5 from "../../imgs/markez-taalom/img44.jpg";
import imgmarkezTaalom6 from "../../imgs/markez-taalom/img43.jpg";
import imgmarkezTaalom7 from "../../imgs/markez-taalom/img42.jpg";
import imgmarkezTaalom8 from "../../imgs/markez-taalom/img41.jpg";
import imgmarkezTaalom9 from "../../imgs/markez-taalom/img40.jpg";
import imgmarkezTaalom10 from "../../imgs/markez-taalom/img39.jpg";
import imgmarkezTaalom11 from "../../imgs/markez-taalom/img38.jpg";
import imgmarkezTaalom12 from "../../imgs/markez-taalom/img37.jpg";
import imgmarkezTaalom13 from "../../imgs/markez-taalom/img36.jpg";
import imgmarkezTaalom14 from "../../imgs/markez-taalom/img35.jpg";
import imgmarkezTaalom15 from "../../imgs/markez-taalom/img34.jpg";
import imgmarkezTaalom16 from "../../imgs/markez-taalom/img33.jpg";
import imgmarkezTaalom17 from "../../imgs/markez-taalom/img32.jpg";
import imgmarkezTaalom18 from "../../imgs/markez-taalom/img31.jpg";
import imgmarkezTaalom19 from "../../imgs/markez-taalom/img30.jpg";
import imgmarkezTaalom20 from "../../imgs/markez-taalom/img5.jpg";
import imgmarkezTaalom21 from "../../imgs/markez-taalom/img6.jpg";
import imgmarkezTaalom22 from "../../imgs/markez-taalom/img7.jpg";
import imgmarkezTaalom23 from "../../imgs/markez-taalom/img8.jpg";
import imgmarkezTaalom24 from "../../imgs/markez-taalom/img9.jpg";
import imgmarkezTaalom25 from "../../imgs/markez-taalom/img10.jpg";
import imgmarkezTaalom26 from "../../imgs/markez-taalom/img11.jpg";
import imgmarkezTaalom27 from "../../imgs/markez-taalom/img23.jpg";
import imgmarkezTaalom28 from "../../imgs/markez-taalom/img24.jpg";
import imgmarkezTaalom29 from "../../imgs/markez-taalom/img14.jpg";
import imgmarkezTaalom30 from "../../imgs/markez-taalom/img15.jpg";
import imgmarkezTaalom31 from "../../imgs/markez-taalom/img16.jpg";
import imgmarkezTaalom32 from "../../imgs/markez-taalom/img17.jpg";
import imgmarkezTaalom33 from "../../imgs/markez-taalom/img18.jpg";
import imgmarkezTaalom34 from "../../imgs/markez-taalom/img19.jpg";
import imgmarkezTaalom35 from "../../imgs/markez-taalom/img20.jpg";
import imgmarkezTaalom36 from "../../imgs/markez-taalom/img21.jpg";
import imgmarkezTaalom37 from "../../imgs/markez-taalom/img22.jpg";
import imgmarkezTaalom38 from "../../imgs/markez-taalom/img25.jpg";
import imgmarkezTaalom39 from "../../imgs/markez-taalom/img26.jpg";
import imgmarkezTaalom40 from "../../imgs/markez-taalom/img27.jpg";
import imgmarkezTaalom41 from "../../imgs/markez-taalom/img28.jpg";
import imgmarkezTaalom42 from "../../imgs/markez-taalom/img29.jpg";



const sections = [
  {
    id: "id1",
    icon: <FaLock size={30} />,
    title: "الحماية الرقمية",
    date: "27/05/2024",
    text: `
في يوم مركز التعلم الذي عُقد في 27 مايو 2024، قدمنا يومًا حافلًا بالفعاليات والدروس العملية في موضوع الحاسوب، وكان يهدف إلى تقديم تجربة تعليمية تفاعلية للطلاب، بكشل تطبيقي عملي لا منهجي. بدأ التحضير لهذا اليوم قبل أسبوع، حيث كنا نعمل معًا كفريق من طلاب أكاديمية القاسمي على تطوير أفكار متنوعة لفعاليات تعليمية. كانت جلساتنا التحضيرية مليئة بالنقاشات والتجارب العملية، حيث كنا نقدم أفكارنا لبعضنا البعض ونقوم بتقييمها، مما ساعدنا على تحسين كل فكرة لتكون جاهزة ليوم الحدث.

في يوم مركز التعلم، كان لكل طالب أكاديمي محطة خاصة به لشرح جانب من جوانب علم الحاسوب بشكل عملي ويدوي لطلاب المدرسة ليتذوق الطالب طعم التجربة العملية ويعيش شعور التجربة. هدفت هذه الفعاليات إلى غمر الطلاب في تجربة عملية حية، ليعيشوا شعور الاكتشاف والتعلم بأنفسهم.

محطات الفعاليات:

سباق الكلمات: حيث تنافس الطلاب في كتابة النصوص بسرعة باستخدام اللغة التي يفضلونها، مما ساعدهم على تحسين مهارات الكتابة وسرعة الطباعة.
طابعة الـ 3D: قدمت محطة تعرف الطلاب على كيفية عمل طابعات ثلاثية الأبعاد, واعطاء معلومات عامه على كونها تقوم بطباعة مجسمات ضخمة ومباني وحتى تقوم بطباعة الطعام ايضا وكما قامو بتجربة طباعة مجسمات بسيطة، مما أثار دهشتهم وإعجابهم بالتكنولوجيا المتقدمة.
الألوان في الحاسوب: شرحت هذه المحطة كيف يتعرف الحاسوب على الألوان ويميزها، حيث انه بمفهومنا العام ومفهوم الانسان تعلم ماهية الاوان من الصغر ليميزها, لاكن السؤال هو كيف للحاسوب ان يميز هذه الالوان؟ مما عزز فهمهم للعمليات الرقمية الأساسية.
التشفير وفك الرموز: تعرف الطلاب على أساليب التشفير وفك الرموز، مما ساعدهم على فهم أهمية حماية البيانات.
أحد الأنشطة البارزة كان غرفة الهروب (Escape Room)، حيث تم تقسيم الطلاب إلى فرق وتم تزويدهم بألغاز ورموز لحلها باستخدام المعلومات التي تعلموها في المحطات الأخرى. كان الفريق الأسرع في حل الألغاز هو الفائز، مما أضاف جوًا من التحدي والإثارة.

والجدير بذكره ايضا هو دور المعلم أحمد اغبارية في تغذية افكارنا بأفكارًا جديدة، بمشاركة افكارة النيره معنا عن ما يمكن ان يشمله هذا اليوم "مركز التعلم"  واعطي فكرة جميلة مثل تجربة نظارات الـ 3D والتعرف على أجزاء الحاسوب من الداخل. وانار افكارنا بمواضيع اخرى شتى. كانت أفكاره كنسمة من الإبداع التي أضافت بعدًا جديدًا لليوم، حيث أثرت واوقدت افكار جديده لدينا.

ومن هنا سابدأ بشرح الفعالية التي اديتها:
محطتي: الأمن السيبراني والتشفير:
كانت محطتي تركز على توعية الطلاب بمفهوم الأمن السيبراني وأهمية التشفير في حماية المعلومات الرقمية. بدأت الفعالية بتحية الطلاب وتقديم مقدمة حول أهمية الأمن السيبراني عن طريق شرح مفاهيم التشفير، بما في ذلك تشفير قيصر، من خلال أمثلة واقعية وتمارين على اللوح.

التطبيق العملي:
طلبت من الطلاب النهوض وأخذ قناني بلاستيكية تحتوي على أوراق مشفرة. وقبل فتحها، أوضحت لهم مفهوم الرسائل المشفرة بالتطرق الى مثال يرونه كل يوم في تطبيق واتس اب وهو ان الرسائل بينك وبين الطرف الاخر مشفرة تمام ماذا يعنه ذلك؟ ولماذا هي مشفرة؟ ومن من؟. 
بدأ الطلاب باعطاء الفرضيات واجوبة حتى توصلنا الى اجابة ان الطرف التالث وهو ما يسمى بـ  الهاكر وهو الذي لا نريد منه فهم الرسئل اذا تم اختراقها لذلك نقوم بتشفيرها.
وبتالي طلبت منهم فتح القناني ورئية محتوى الرسالة وتفاجئوا بعدم فهم اي من الرموز المكتوبة.
عندها اشرت على ان موقفهم هذا هو مماثل لموقف الهاكر الذي لا يعلم قيمة المفتاح وقدر الازاحة. 
تفاعل الطلاب مع النشاط وبدأوا في فك تشفير الرسائل باستخدام قيمة المفتاح التي أعطيتها لهم، وتمثلت لهم كلامات تشجيعية مثل "great /you are fast/fantastic /wonderful ..." وبالتالي قمت ايضا بشرح ان هنالك العديد من انواع التشفير ومنها مثلا تشفير مورس عن طريق الاضائة او الصوت  مما جعلهم يشعرون بدهشة و بالإنجاز والفخر.

مفاجأة التحدي:
في النهاية، قدمت تحديًا للطلاب لكلمة مشقرة وعليهم بمحاولة فك تشفيرها باستخدام مفتاح مخفي بين سطور السؤال. كان هذا النشاط ممتعًا ومليئًا بالتحدي، حيث تفاعل الطلاب بشكل إيجابي وحماس.

اختتمت الفعالية بتوزيع هدايا رمزية للطلاب، تضمنت صورًا مشفرة تحتاج إلى فك تشفيرها باستخدام المرايا أو تحت الإضاءة، مما أضاف لمسة ممتعة وجعل الطلاب يشعرون بالإنجاز.

كان هذا اليوم مليئًا بالأنشطة التفاعلية التي قدمت للطلاب فرصة لتجربة واكتشاف مفاهيم علم الحاسوب بطريقة ممتعة وعملية. شعرت بالفخر لنجاح الفعالية ورؤية الطلاب يتفاعلون ويتعلمون بحماس.
      `,
    images: [
      { src: imgmarkezTaalom1, alt: "Sample Image 1" },
      { src: imgmarkezTaalom2, alt: "Sample Image 2" },
      { src: imgmarkezTaalom3, alt: "Sample Image 3" },
      { src: imgmarkezTaalom4, alt: "Sample Image 4" },
      { src: imgmarkezTaalom5, alt: "Sample Image 4" },
      { src: imgmarkezTaalom6, alt: "Sample Image 4" },
      { src: imgmarkezTaalom7, alt: "Sample Image 4" },
      { src: imgmarkezTaalom8, alt: "Sample Image 4" },
      { src: imgmarkezTaalom9, alt: "Sample Image 4" },
      { src: imgmarkezTaalom10, alt: "Sample Image 4" },
      { src: imgmarkezTaalom11, alt: "Sample Image 4" },
      { src: imgmarkezTaalom12, alt: "Sample Image 4" },
      { src: imgmarkezTaalom13, alt: "Sample Image 4" },
      { src: imgmarkezTaalom14, alt: "Sample Image 4" },
      { src: imgmarkezTaalom16, alt: "Sample Image 4" },
      { src: imgmarkezTaalom17, alt: "Sample Image 4" },
      { src: imgmarkezTaalom18, alt: "Sample Image 4" },
      { src: imgmarkezTaalom19, alt: "Sample Image 4" },
      { src: imgmarkezTaalom20, alt: "Sample Image 4" },
      { src: imgmarkezTaalom21, alt: "Sample Image 4" },
      { src: imgmarkezTaalom22, alt: "Sample Image 4" },
      { src: imgmarkezTaalom23, alt: "Sample Image 4" },
      { src: imgmarkezTaalom24, alt: "Sample Image 4" },
      { src: imgmarkezTaalom25, alt: "Sample Image 4" },
      { src: imgmarkezTaalom26, alt: "Sample Image 4" },
      { src: imgmarkezTaalom27, alt: "Sample Image 4" },
      { src: imgmarkezTaalom28, alt: "Sample Image 4" },
      { src: imgmarkezTaalom29, alt: "Sample Image 4" },
      { src: imgmarkezTaalom30, alt: "Sample Image 4" },
      { src: imgmarkezTaalom31, alt: "Sample Image 4" },
      { src: imgmarkezTaalom32, alt: "Sample Image 4" },
      { src: imgmarkezTaalom33, alt: "Sample Image 4" },
      { src: imgmarkezTaalom34, alt: "Sample Image 4" },
      { src: imgmarkezTaalom35, alt: "Sample Image 4" },
      { src: imgmarkezTaalom36, alt: "Sample Image 4" },
      { src: imgmarkezTaalom37, alt: "Sample Image 4" },
      { src: imgmarkezTaalom38, alt: "Sample Image 4" },
      { src: imgmarkezTaalom39, alt: "Sample Image 4" },
      { src: imgmarkezTaalom40, alt: "Sample Image 4" },
      { src: imgmarkezTaalom41, alt: "Sample Image 4" },
    ],
    links: [
      {
        href: "https://docs.google.com/document/d/1HfgZq0mvZ2m21Cxh_qF-IxUKMtGF8M5T1JxaN4yWtKM/edit",
        title: 'مستند: "مخطط الدرس"',
      },
      {
        href: "https://docs.google.com/document/d/1NtKyQqJog4PcWZBJtbjl5B6MCqoXce0pKkPXlxlJb0U/edit",
        title: 'مستند: "مجرى الدرس"',
      },
      {
        href: "https://docs.google.com/presentation/d/11UBFkhlTkLdaDYFupDr1Mq5o1L2vbTjjiPICJbyNnVs/edit#slide=id.p",
        title: 'مستند: "معروضة الدرس"',
      },
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
          links={section.links}
        />
      ))}
    </div>
  );
};

export default LearningCenter;
