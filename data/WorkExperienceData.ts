
type TimelineEvent = {
    title: string;
    date: string;
    description?: string;
};

const events: TimelineEvent[] = [
    {
      title: 'Discovery',
      date: 'Jan 2025',
      description: 'Research and requirement gathering.',
    },
    {
      title: 'Design',
      date: 'Feb 2025',
      description: 'UI/UX design and prototyping.',
    },
    {
      title: 'Development',
      date: 'Mar 2025',
      description: 'Frontend and backend implementation.',
    },
    {
      title: 'Launch',
      date: 'Apr 2025',
      description: 'QA and product deployment.',
    },
  ];
export default events