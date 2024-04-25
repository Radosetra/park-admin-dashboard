import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableFeedback from '../../components/Tables/TableFeedback';
import DefaultLayout from '../../layout/DefaultLayout';
import { FeedbackDto } from '../../_type/feedback.dto';
import { useFetchFeedback } from '../../hooks/feedback.hooks';
import Loader from '../../common/Loader';

const Feedback = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Feedback" />

      <div className="flex flex-col items-center W-full">
        <TableFeedback />
      </div>
    </DefaultLayout>
  );
};

export default Feedback;
