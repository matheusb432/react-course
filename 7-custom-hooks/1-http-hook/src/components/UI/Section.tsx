import { ReactNode } from 'react';
import classes from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
