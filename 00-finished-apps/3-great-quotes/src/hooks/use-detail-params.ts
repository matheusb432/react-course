import { useParams } from 'react-router-dom';
import { DetailParams } from '../types/detail-params';

const useDetailParams = () => useParams<DetailParams>();

export { useDetailParams };
