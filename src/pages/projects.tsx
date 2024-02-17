import { Card } from 'components/Card';
import { MarketDataCard } from 'components/MarketDataCard';
import { Sidebar } from 'components/Sidebar';
import { FC, ReactNode } from 'react';


interface ProjectsProps {
  children: ReactNode;
}

const Projects: FC<ProjectsProps> = ({ children }) => {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default Projects