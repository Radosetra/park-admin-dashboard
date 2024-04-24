import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableFeedback from "../../components/Tables/TableFeedback";
import DefaultLayout from "../../layout/DefaultLayout";
import { FeedbackStatus, FeedbackType } from "../../types/feedbackType";

const feedbackData: FeedbackType[] = [
  {
    sender: 'john@doe.com',
    name: 'John Doe',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '12 avr',
    status: FeedbackStatus.approved,
    photos : [
      "src/images/landscape/1.jpg",
      "src/images/landscape/2.jpg",
      "src/images/landscape/3.jpg",
      "src/images/landscape/4.jpg",
      "src/images/landscape/5.jpg",
      "src/images/landscape/6.jpg"
    ]
  },
  {
    sender: 'john@cena.com',
    name: 'John Cena',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '12 avr',
    status: FeedbackStatus.approved,
    photos : [
      "src/images/landscape/1.jpg",
      "src/images/landscape/2.jpg",
      "src/images/landscape/5.jpg",
      "src/images/landscape/6.jpg"
    ]
  },
  {
    sender: 'koto@doe.com',
    name: 'Rakoto Lahy',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '13 avr',
    status: FeedbackStatus.approved,
    photos : []
  },
  {
    sender: 'rasolo@gmail.com',
    name: 'Rasolo Nantenaina',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '13 avr',
    status: FeedbackStatus.approved,
    photos : [
      "src/images/landscape/1.jpg",
      "src/images/landscape/2.jpg",
      "src/images/landscape/3.jpg",
      "src/images/landscape/4.jpg",
      "src/images/landscape/5.jpg",
      "src/images/landscape/6.jpg"
    ]
  },
  {
    sender: 'Razafy@gmail.com',
    name: 'Razafy Jaona',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '12 avr',
    status: FeedbackStatus.pending,
    photos : [
      "src/images/landscape/4.jpg",
      "src/images/landscape/5.jpg",
      "src/images/landscape/6.jpg"
    ]
  },
  {
    sender: 'Andria@doe.com',
    name: 'Andria Lucas',
    content: ' amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '10 avr',
    status: FeedbackStatus.pending,
    photos : [
      "src/images/landscape/1.jpg",
      "src/images/landscape/3.jpg",
      "src/images/landscape/4.jpg",
      "src/images/landscape/6.jpg"
    ]
  },
  {
    sender: 'toto@gmail.com',
    name: 'Toto Doe',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '11 avr',
    status: FeedbackStatus.declined,
    photos : [
      "src/images/landscape/2.jpg",
      "src/images/landscape/3.jpg",
      "src/images/landscape/4.jpg",
    ]
  },
  {
    sender: 'tata@gmail.com',
    name: 'Tata',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam sequi ea culpa quae ab hic explicabo iste a maxime quasi, cum, voluptate dignissimos eveniet impedit? Fugiat repellendus in omnis.',
    date: '11 avr',
    status: FeedbackStatus.declined,
    photos : [
      "src/images/landscape/1.jpg",
      "src/images/landscape/2.jpg",
      "src/images/landscape/3.jpg",
      "src/images/landscape/4.jpg",
      "src/images/landscape/5.jpg",
      "src/images/landscape/6.jpg"
    ]
  },
];

const Feedback = () => {
  // Modal 
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <DefaultLayout>
      <Breadcrumb pageName="Feedback"/>

      <div className="flex flex-col items-center">
        <TableFeedback
          feedbackData={feedbackData}
        />
        
      </div>
    </DefaultLayout>
  )
}

export default Feedback;