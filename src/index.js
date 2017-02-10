import Ollie from './Ollie';
import { projectTypes } from './constants';
import surveys from './surveys';

const ollie = new Ollie({ projectTypes, surveys });
ollie.basic();
