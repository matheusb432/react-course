import { useParams } from 'react-router-dom';
import { DetailsParams } from '../types';

const useDetailsParams = () => useParams<DetailsParams>();

export { useDetailsParams };
