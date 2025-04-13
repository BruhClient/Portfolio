import { Facebook, LucideIcon } from "lucide-react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiFacebook, SiGoogle, SiNasa, SiVisa } from "react-icons/si";

type TimelineEvent = {
    title: string;
    date: string;
    description?: string;
    icon : LucideIcon | IconType,
};

const events: TimelineEvent[] = [
    {
      title: 'Google Internship',
      date: 'Jan 2025 - Mar 2025',
      description: 'Research and requirement gathering.',
      icon : FaGoogle 
    },
    {
      title: 'Visa Internship',
      date: 'Feb 2025',
      description: 'UI/UX design and prototyping.',
      icon : SiVisa 
    },
    {
      title: 'Facebook Internship',
      date: 'Mar 2025',
      description: 'Frontend and backend implementation.',
      icon : BsFacebook 
    },
    {
      title: 'Nasa Internship',
      date: 'Apr 2025',
      description: 'QA and product deployment.',
      icon : SiNasa 
    },
    
  ];
export default events